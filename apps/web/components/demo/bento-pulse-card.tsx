"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

/**
 * BentoPulseCard - Specialized component for Scheduler Pulse.
 * Exact extraction from user's "Bento-Material Hybrid" HTML.
 *
 * Props:
 * - status: "Running" | "Idle" | "Stopped" | "Error"
 * - cluster: string ("US-East-1")
 * - stability: number (0-100)
 * - lastTick: string ("0.2s")
 * - loopDur: string ("45ms")
 * - cpu: string ("12%")
 * - mem: string ("4.2GB")
 * - staleLock: boolean (if true, shows the warning)
 */
export function BentoPulseCard({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data Props
  const status = (props.status as string) || "Running";
  const cluster = (props.cluster as string) || "Unknown Cluster";
  const stability = (props.stability as number) || 98;
  const lastTick = (props.lastTick as string) || "--";
  const loopDur = (props.loopDur as string) || "--";
  const cpu = (props.cpu as string) || "--";
  const mem = (props.mem as string) || "--";
  const staleLock = props.staleLock as boolean;

  // Derived Visuals
  const isRunning = status === "Running";
  const statusColor = isRunning
    ? "bg-[#386a20]"
    : status === "Error"
      ? "bg-[#ba1a1a]"
      : "bg-[#74796d]";
  const statusBg = isRunning
    ? "bg-[#d3e8d3]"
    : status === "Error"
      ? "bg-[#ffdad6]"
      : "bg-[#e0e4eb]";
  const statusText = isRunning
    ? "text-[#042100]"
    : status === "Error"
      ? "text-[#410002]"
      : "text-[#444746]";

  const handleAction = (action: string) => {
    (
      window as unknown as { __demoAction?: (text: string) => void }
    ).__demoAction?.(action);
  };

  return (
    <div
      className={cn(
        "bento-tile col-span-1 md:col-span-2 lg:col-span-2 bg-[#ecf0f3] flex flex-col",
        props.className as string,
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#444746] flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              {isRunning && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              )}
              <span
                className={cn(
                  "relative inline-flex rounded-full h-2.5 w-2.5 shadow-[0_0_8px_#4ade80]",
                  isRunning ? "bg-[#386a20]" : statusColor,
                )}
              ></span>
            </span>
            Scheduler Pulse
          </h3>
          <p className="text-[9px] font-bold text-[#444746]/60 pl-4.5">
            Cluster: {cluster}
          </p>
        </div>
        <div
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-[inset_2px_2px_4px_#c2d1c5,inset_-2px_-2px_4px_#ffffff] border border-white/40",
            statusBg,
          )}
        >
          <span className={cn("w-1.5 h-1.5 rounded-full", statusColor)}></span>
          <span
            className={cn(
              "text-[9px] font-black uppercase tracking-wider",
              statusText,
            )}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Metrics */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4 h-24">
          {/* Gauge */}
          <div className="w-24 shrink-0 neumorph-inset rounded-2xl relative flex items-center justify-center">
            <svg className="size-20 -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#d1d9e6]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
              <path
                className="text-[#386a20]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray={`${stability}, 100`}
                strokeLinecap="round"
                strokeWidth="3"
                style={{
                  filter: "drop-shadow(0px 0px 2px rgba(56,106,32,0.5))",
                }}
              ></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-black text-[#1a1c1e]">
                {stability}%
              </span>
              <span className="text-[7px] font-bold uppercase text-[#444746]/60">
                Stability
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div className="neumorph-inset rounded-xl p-2 flex flex-col justify-center pl-3">
              <span className="text-[8px] font-black uppercase text-[#444746]/60 mb-0.5">
                Last Tick
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-black text-[#1a1c1e]">
                  {lastTick}
                </span>
                <span className="text-[8px] font-bold text-[#386a20]">OK</span>
              </div>
            </div>
            <div className="neumorph-inset rounded-xl p-2 flex flex-col justify-center pl-3">
              <span className="text-[8px] font-black uppercase text-[#444746]/60 mb-0.5">
                Loop Dur
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-black text-[#1a1c1e]">
                  {loopDur}
                </span>
              </div>
            </div>
            <div className="col-span-2 neumorph-inset rounded-xl p-2 px-3 flex items-center justify-between">
              <div className="flex flex-col justify-center">
                <span className="text-[8px] font-black uppercase text-[#444746]/60 mb-0.5">
                  Resource Usage
                </span>
                <span className="text-[10px] font-black text-[#1a1c1e]">
                  CPU: {cpu} <span className="text-[#444746]/40">|</span> MEM:{" "}
                  {mem}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#444746]/60 text-base">
                memory
              </span>
            </div>
          </div>
        </div>

        {/* Warning / Lock */}
        {staleLock && (
          <div className="rounded-xl bg-[#ffdad6] border border-[#ffb4ab] p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-8 shrink-0 rounded-full bg-[#ba1a1a] flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  lock_clock
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-[#410002] tracking-wide">
                  Found Stale Lock
                </p>
                <p className="text-[9px] font-bold text-[#690005]">
                  Process hanging &gt; 5m
                </p>
              </div>
            </div>
            <button
              className="px-3 py-1.5 rounded-lg bg-[#ba1a1a] text-white text-[9px] font-bold uppercase shadow-md active:shadow-inner active:scale-95 transition-all"
              onClick={() => handleAction("Clear Lock")}
            >
              Clear Lock
            </button>
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
          <button
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ecf0f3] shadow-neumorph-btn hover:shadow-neumorph-sm active:shadow-neumorph-inset transition-all text-[#1a1c1e] group"
            onClick={() => handleAction("Restart")}
          >
            <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">
              restart_alt
            </span>
            <span className="text-[10px] font-black uppercase tracking-wide">
              Restart
            </span>
          </button>
          <button
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ecf0f3] shadow-neumorph-btn hover:shadow-neumorph-sm active:shadow-neumorph-inset transition-all text-[#444746] group"
            onClick={() => handleAction("Pause")}
          >
            <span className="material-symbols-outlined text-lg group-active:scale-90">
              pause
            </span>
            <span className="text-[10px] font-black uppercase tracking-wide">
              Pause
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
