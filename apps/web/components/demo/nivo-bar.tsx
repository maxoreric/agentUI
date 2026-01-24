"use client";

import { ResponsiveBar } from "@nivo/bar";
import type { ComponentRenderProps } from "./types";

/**
 * Nivo Bar Chart Wrapper
 * @see https://nivo.rocks/bar/
 *
 * Props:
 * - data: Array<Record<string, string | number>> (required)
 *   Example: [{ label: "A", value: 10 }, { label: "B", value: 20 }]
 * - keys: string[] (required) - Keys to use for bars, e.g. ["value"]
 * - indexBy: string (default: "label") - Key to use for index/categories
 * - height: number (default: 300) - Chart container height in pixels
 * - layout: "vertical" | "horizontal" (default: "vertical")
 * - groupMode: "stacked" | "grouped" (default: "stacked")
 * - padding: number (default: 0.3) - Padding between bars (0-1)
 * - colors: string (default: "nivo") - Color scheme
 * - enableLabel: boolean (default: true) - Show bar labels
 * - enableGridX: boolean (default: false)
 * - enableGridY: boolean (default: true)
 * - borderRadius: number (default: 0) - Bar corner radius
 */
export function NivoBar({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data format: [{ label: "A", value1: 10, value2: 5 }]
  const data = (props.data as Array<Record<string, string | number>>) || [
    { label: "A", value: 30 },
    { label: "B", value: 45 },
    { label: "C", value: 25 },
    { label: "D", value: 55 },
  ];

  const keys = (props.keys as string[]) || ["value"];
  const indexBy = (props.indexBy as string) || "label";
  const height = (props.height as number) || 300;
  const layout = (props.layout as "vertical" | "horizontal") || "vertical";
  const groupMode = (props.groupMode as "stacked" | "grouped") || "stacked";
  const padding = (props.padding as number) ?? 0.3;
  const colors = (props.colors as string) || "nivo";
  const enableLabel = (props.enableLabel as boolean) ?? true;
  const enableGridX = (props.enableGridX as boolean) ?? false;
  const enableGridY = (props.enableGridY as boolean) ?? true;
  const borderRadius = (props.borderRadius as number) ?? 0;

  return (
    <div style={{ height }}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
        padding={padding}
        layout={layout}
        groupMode={groupMode}
        colors={{ scheme: colors as "nivo" | "category10" | "paired" }}
        borderRadius={borderRadius}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableLabel={enableLabel}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        animate={true}
      />
    </div>
  );
}
