import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

// Helper to get the agent UI directory
const getAgentDir = () => path.join(os.homedir(), ".agent-ui");
const getUIFile = () => path.join(getAgentDir(), "ui.json");

export async function POST(req: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const uiFile = getUIFile();

      // Ensure directory exists
      if (!fs.existsSync(getAgentDir())) {
        fs.mkdirSync(getAgentDir(), { recursive: true });
      }

      let lastContent = "";

      const sendUpdate = () => {
        try {
          if (fs.existsSync(uiFile)) {
            const content = fs.readFileSync(uiFile, "utf-8");

            // Only send if content changed
            if (content === lastContent) {
              return;
            }
            lastContent = content;

            // Validate JSON
            const tree = JSON.parse(content);

            // Send elements first
            if (tree.elements) {
              for (const [key, element] of Object.entries(tree.elements)) {
                controller.enqueue(
                  encoder.encode(
                    JSON.stringify({
                      op: "replace",
                      path: `/elements/${key}`,
                      value: element,
                    }) + "\n",
                  ),
                );
              }
            }

            // Send root last
            if (tree.root) {
              controller.enqueue(
                encoder.encode(
                  JSON.stringify({
                    op: "set",
                    path: "/root",
                    value: tree.root,
                  }) + "\n",
                ),
              );
            }
          }
        } catch (e) {
          // Ignore parse errors from partial writes
        }
      };

      // Initial check
      sendUpdate();

      // Poll for changes every 500ms
      const interval = setInterval(sendUpdate, 500);

      // Cleanup on abort
      req.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
