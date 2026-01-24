"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

/**
 * NeonMetricCard - Ring Chart for CPU/Memory/etc.
 * Based on the "Ultimate Dark Hybrid Bento Dashboard" design.
 *
 * Props:
 * - title: string ("CPU Load")
 * - subtitle: string ("Core Processing")
 * - value: string ("38%")
 * - percent: number (0-100)
 * - color: "neon-blue" | "neon-purple" | "neon-green" | "amber-500"
 */
export function NeonMetricCard({ element }: ComponentRenderProps) {
  const { props } = element;

  const title = props.title as string;
  const subtitle = props.subtitle as string;
  const value = props.value as string;
  const percent = Math.min(100, Math.max(0, (props.percent as number) || 0));

  // Map prop colors to our CSS variables/Tailwind classes
  const colorMap: Record<
    string,
    { stroke: string; shadow: string; text: string; ring: string; bg: string }
  > = {
    "neon-blue": {
      stroke: "#00d4ff",
      shadow: "rgba(0,212,255,0.6)",
      text: "text-white",
      ring: "ring-neon-blue/20",
      bg: "bg-neon-blue",
    },
    "neon-purple": {
      stroke: "#bc13fe",
      shadow: "rgba(188,19,254,0.6)",
      text: "text-white",
      ring: "ring-neon-purple/20",
      bg: "bg-neon-purple",
    },
    "neon-green": {
      stroke: "#39ff14",
      shadow: "rgba(57,255,20,0.6)",
      text: "text-white",
      ring: "ring-neon-green/20",
      bg: "bg-neon-green",
    },
    "amber-500": {
      stroke: "#f59e0b",
      shadow: "rgba(245,158,11,0.6)",
      text: "text-white",
      ring: "ring-amber-500/20",
      bg: "bg-amber-500",
    },
  };

  const colorKey = (props.color as string) || "neon-blue";
  const theme = colorMap[colorKey] || colorMap["neon-blue"];

  // SVG Circle Math
  const r = 40;
  const c = 2 * Math.PI * r; // ~251.3
  const offset = c - (percent / 100) * c;

  return (
    <div
      className={cn(
        "glass-neu-card p-6 flex items-center gap-6 rounded-2xl w-full",
        props.className as string,
      )}
    >
      {/* Ring Chart */}
      <div className="relative w-24 h-24 rounded-full glass-neu-inset flex items-center justify-center shrink-0">
        <svg className="w-20 h-20 transform -rotate-90">
          {/* Background Track */}
          <circle
            cx="40"
            cy="40"
            fill="none"
            r={r}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          ></circle>
          {/* Progress Ring */}
          <circle
            cx="40"
            cy="40"
            fill="none"
            r={r}
            stroke={theme?.stroke}
            strokeWidth="8"
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 4px ${theme?.shadow})` }}
          ></circle>
        </svg>
        {/* Center Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-black text-white">{value}</span>
        </div>
      </div>

      {/* Text Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-black text-white truncate">{title}</h4>
        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 truncate">
          {subtitle}
        </p>

        {/* Mini Status Indicator */}
        <div className="mt-3 flex items-center gap-2">
          <span
            className={cn(
              "flex h-2 w-2 rounded-full ring-2",
              theme?.bg,
              theme?.ring,
            )}
          ></span>
          <span
            className={cn(
              "text-[10px] font-black uppercase",
              theme?.text === "text-white"
                ? `text-[${theme?.stroke}]`
                : theme?.text,
            )}
            style={{ color: theme?.stroke }}
          >
            {percent > 90 ? "Critical" : percent > 70 ? "High" : "Optimal"}
          </span>
        </div>
      </div>
    </div>
  );
}
