"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

/**
 * BentoMetricCard - Performance Overview / Metric Card
 *
 * Props:
 * - title: string ("Performance Overview")
 * - subtitle: string ("Revenue growth over time")
 * - value: string ("$142,500.00")
 * - trend: string ("+12.5% vs last month")
 * - trendUp: boolean
 * - chartPath: string (SVG path d attribute) - optional, defaults to a sample wave
 * - color: "sky" | "mint" | "lavender" (affects SVG color)
 */
export function BentoMetricCard({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data Props
  const title = (props.title as string) || "Performance Overview";
  const subtitle = (props.subtitle as string) || "Metric growth";
  const value = (props.value as string) || "$0.00";
  const trend = (props.trend as string) || "+0%";
  const trendUp = props.trendUp !== false;
  const chartPath =
    (props.chartPath as string) ||
    "M0,120 C50,110 80,140 120,90 C160,40 200,60 250,30 C300,0 350,50 400,20";
  const color = (props.color as string) || "sky";

  const colorMap: Record<string, string> = {
    sky: "#2a5c88",
    mint: "#146c2e",
    lavender: "#65558f",
  };
  const strokeColor = colorMap[color] || colorMap.sky;

  return (
    <div
      className={cn(
        "bento-tile flex flex-col gap-6 relative h-full min-h-[300px]",
        props.className as string,
      )}
    >
      <div className="flex items-center justify-between z-10">
        <div>
          <h3 className="text-lg font-extrabold text-[#1a1c1e]">{title}</h3>
          <p className="text-sm font-medium text-[#444746]/70">{subtitle}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end z-10">
        <div className="mb-4 pl-2">
          <p className="text-5xl font-extrabold tracking-tight text-[#001d35]">
            {value}
          </p>
          <div
            className={cn(
              "flex items-center gap-1 mt-1.5",
              trendUp ? "text-[#146c2e]" : "text-[#ba1a1a]",
            )}
          >
            <span className="material-symbols-outlined text-sm font-bold">
              {trendUp ? "trending_up" : "trending_down"}
            </span>
            <p className="text-sm font-bold">{trend}</p>
          </div>
        </div>

        <div className="h-64 w-full p-4 relative">
          <svg
            className="w-full h-full chart-shadow"
            preserveAspectRatio="none"
            viewBox="0 0 400 150"
          >
            <path
              d={chartPath}
              fill="none"
              stroke={strokeColor}
              strokeLinecap="round"
              strokeWidth="6"
            ></path>
          </svg>
          <div className="flex justify-between mt-6 px-4 text-[#444746] text-[10px] font-black uppercase tracking-widest opacity-60">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
