import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

// Helper to get the agent UI directory
const getAgentDir = () => path.join(os.homedir(), ".agent-ui");
const getInputFile = () => path.join(getAgentDir(), "user-input.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inputFile = getInputFile();

    // Ensure directory exists
    if (!fs.existsSync(getAgentDir())) {
      fs.mkdirSync(getAgentDir(), { recursive: true });
    }

    // Write input to file
    fs.writeFileSync(inputFile, JSON.stringify(body, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to write input:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
