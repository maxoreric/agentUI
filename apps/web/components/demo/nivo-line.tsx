"use client";

import { ResponsiveLine } from "@nivo/line";
import type { ComponentRenderProps } from "./types";

/**
 * Nivo Line Chart Wrapper
 * @see https://nivo.rocks/line/
 *
 * Props:
 * - data: Array<{id: string, data: Array<{x: string|number, y: number}>}> (required)
 *   Example: [{ id: "series1", data: [{ x: "Jan", y: 10 }, { x: "Feb", y: 20 }] }]
 * - height: number (default: 300) - Chart container height in pixels
 * - curve: "linear" | "natural" | "monotoneX" | "step" | "stepBefore" | "stepAfter" (default: "linear")
 * - enableArea: boolean (default: false) - Fill area under line
 * - enablePoints: boolean (default: true) - Show data points
 * - enableGridX: boolean (default: true)
 * - enableGridY: boolean (default: true)
 * - colors: string (default: "nivo") - Color scheme: "nivo", "category10", "paired", etc.
 * - axisBottom: object | null (optional) - X-axis config
 * - axisLeft: object | null (optional) - Y-axis config
 */
export function NivoLine({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data format: [{ id: "series1", data: [{ x: "a", y: 1 }, { x: "b", y: 2 }] }]
  const data = (props.data as Array<{
    id: string;
    data: Array<{ x: string | number; y: number }>;
  }>) || [
    {
      id: "sample",
      data: [
        { x: "A", y: 10 },
        { x: "B", y: 20 },
        { x: "C", y: 15 },
        { x: "D", y: 25 },
      ],
    },
  ];

  const height = (props.height as number) || 300;
  const curve =
    (props.curve as
      | "linear"
      | "natural"
      | "monotoneX"
      | "step"
      | "stepBefore"
      | "stepAfter") || "linear";
  const enableArea = (props.enableArea as boolean) ?? false;
  const enablePoints = (props.enablePoints as boolean) ?? true;
  const enableGridX = (props.enableGridX as boolean) ?? true;
  const enableGridY = (props.enableGridY as boolean) ?? true;
  const colors = (props.colors as string) || "nivo";

  return (
    <div style={{ height }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        curve={curve}
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
        colors={{ scheme: colors as "nivo" | "category10" | "paired" }}
        enableArea={enableArea}
        enablePoints={enablePoints}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        pointSize={8}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        animate={true}
      />
    </div>
  );
}
