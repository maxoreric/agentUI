"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import {
  DataProvider,
  ActionProvider,
  VisibilityProvider,
  useUIStream,
  useData,
  Renderer,
} from "@json-render/react";
import { agentRegistry } from "@/components/agent-registry";

function AgentViewer() {
  const { tree, isStreaming, error, send } = useUIStream({
    api: "/api/agent/stream",
    onError: (err) => console.error("Connection error:", err.message),
  });
  const { data } = useData();
  const [connected, setConnected] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // Start streaming only once on mount
    if (!initialized.current) {
      initialized.current = true;
      send("init");
    }
  }, [send]);

  useEffect(() => {
    // Check if we are getting data
    if (tree && Object.keys(tree.elements).length > 0) {
      setConnected(true);
    }
  }, [tree]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-red-50 text-red-500">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Connection Failed</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (!tree && !connected) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground animate-pulse">
        Waiting for Agent signal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        {/* Status Bar */}
        <div className="fixed top-4 right-4 flex items-center gap-2 text-xs text-muted-foreground bg-background/80 backdrop-blur p-2 rounded-full border border-border shadow-sm z-50">
          <div
            className={`w-2 h-2 rounded-full ${isStreaming ? "bg-green-500 animate-pulse" : connected ? "bg-blue-500" : "bg-gray-400"}`}
          />
          {isStreaming ? "Live" : connected ? "Connected" : "Standby"}
        </div>

        {/* Main Renderer */}
        {tree && (
          <Renderer
            tree={tree}
            registry={agentRegistry}
            loading={isStreaming}
          />
        )}

        {/* Debug Panel */}
        <details className="mt-8">
          <summary className="text-xs text-muted-foreground cursor-pointer">
            Debug Info
          </summary>
          <div className="mt-2 p-4 border border-dashed rounded bg-card/50 text-xs font-mono overflow-auto max-h-96">
            <div className="font-bold mb-2">UI Tree:</div>
            <pre>{JSON.stringify(tree, null, 2)}</pre>
            <div className="font-bold mb-2 mt-4">Form Data:</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </details>
      </div>
    </div>
  );
}

// Inner component that has access to data context for action handlers
function AgentPageInner() {
  const { data } = useData();

  // Action handlers need access to current data
  const actionHandlers = useMemo(
    () => ({
      submit: async () => {
        console.log("Submit action triggered, data:", data);
        try {
          const response = await fetch("/api/agent/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!response.ok) throw new Error("Submit failed");
          console.log("Data submitted successfully");
        } catch (e) {
          console.error("Failed to submit:", e);
        }
      },
      complete_task: async () => {
        console.log("Complete task triggered, data:", data);
        try {
          const response = await fetch("/api/agent/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!response.ok) throw new Error("Submit failed");
          console.log("Task completed");
        } catch (e) {
          console.error("Failed to complete task:", e);
        }
      },
    }),
    [data],
  );

  return (
    <ActionProvider handlers={actionHandlers}>
      <AgentViewer />
    </ActionProvider>
  );
}

// Main page with providers
export default function AgentPage() {
  return (
    <DataProvider initialData={{}}>
      <VisibilityProvider>
        <AgentPageInner />
      </VisibilityProvider>
    </DataProvider>
  );
}
