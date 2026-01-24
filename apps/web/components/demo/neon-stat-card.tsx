"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";
// We use a simple material icon font in the original.
// For this React component, we might want to use Lucide icons dynamically or keep the string-based material icons if available.
// Given the original HTML used material-symbols-outlined, we can try to support that if the font is loaded,
// OR map to Lucide icons.
// For robustness, let's assume we might receive an icon name string and render standard text-based Material Symbols if loaded,
// or fallback to a generic placeholder if not.
// To keep it simple and consistent with the user's provided HTML: they load Material Symbols.
// So we will render the icon string in a span class="material-symbols-outlined".

/**
 * NeonStatCard
 * Based on the "Live Instances" card in the Bento dashboard.
 *
 * Props:
 * - label: string ("Live Instances")
 * - value: string ("2,418")
 * - subValue: string ("/ 2.5k") - optional
 * - trend: string ("12%") - optional
 * - trendUp: boolean - optional
 * - icon: string ("hub") - Material Symbol name
 * - color: "neon-blue" | "neon-purple" | "neon-green"
 */
export function NeonStatCard({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string;
  const value = props.value as string;
  const subValue = props.subValue as string;
  const trend = props.trend as string;
  const trendUp = props.trendUp !== false; // Default to true if not specified
  const icon = (props.icon as string) || "analytics";
  const color = (props.color as string) || "neon-blue";

  const colorMap: Record<string, string> = {
    "neon-blue": "text-neon-blue",
    "neon-purple": "text-neon-purple",
    "neon-green": "text-neon-green",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
  };

  const textColor = colorMap[color] || "text-neon-blue";

  return (
    <div
      className={cn(
        "glass-neu-card p-6 flex flex-col justify-between rounded-2xl h-full min-h-[160px]",
        props.className as string,
      )}
    >
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-xl glass-neu-inset">
          <span className={cn("material-symbols-outlined", textColor)}>
            {icon}
          </span>
        </div>
        {trend && (
          <span
            className={cn(
              "font-bold text-sm flex items-center gap-1",
              trendUp ? "text-neon-green" : "text-rose-500",
            )}
          >
            <span className="material-symbols-outlined text-sm">
              {trendUp ? "trending_up" : "trending_down"}
            </span>
            {trend}
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-wide">
          {label}
        </p>
        <p className="text-3xl font-black text-white mt-1">
          {value}
          {subValue && (
            <span className="text-lg font-medium text-slate-600 ml-2">
              {subValue}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
