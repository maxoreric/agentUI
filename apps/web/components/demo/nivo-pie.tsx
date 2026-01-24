"use client";

import { ResponsivePie } from "@nivo/pie";
import type { ComponentRenderProps } from "./types";

/**
 * Nivo Pie Chart Wrapper
 * @see https://nivo.rocks/pie/
 *
 * Props:
 * - data: Array<{id: string, label: string, value: number, color?: string}> (required)
 *   Example: [{ id: "apple", label: "Apple", value: 30 }, { id: "banana", label: "Banana", value: 20 }]
 * - height: number (default: 300) - Chart container height in pixels
 * - innerRadius: number (default: 0) - Inner radius for donut chart (0-1, 0 = pie, 0.5 = donut)
 * - padAngle: number (default: 0.7) - Padding angle between slices in degrees
 * - cornerRadius: number (default: 3) - Slice corner radius
 * - colors: string (default: "nivo") - Color scheme
 * - enableArcLabels: boolean (default: true) - Show labels on arcs
 * - enableArcLinkLabels: boolean (default: true) - Show labels with links outside
 * - activeOuterRadiusOffset: number (default: 8) - Offset when slice is active/hovered
 */
export function NivoPie({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data format: [{ id: "apple", label: "Apple", value: 30 }]
  const data = (props.data as Array<{
    id: string;
    label: string;
    value: number;
    color?: string;
  }>) || [
    { id: "Ruby", label: "Ruby", value: 30 },
    { id: "Python", label: "Python", value: 25 },
    { id: "JavaScript", label: "JavaScript", value: 35 },
    { id: "Go", label: "Go", value: 10 },
  ];

  const height = (props.height as number) || 300;
  const innerRadius = (props.innerRadius as number) ?? 0;
  const padAngle = (props.padAngle as number) ?? 0.7;
  const cornerRadius = (props.cornerRadius as number) ?? 3;
  const colors = (props.colors as string) || "nivo";
  const enableArcLabels = (props.enableArcLabels as boolean) ?? true;
  const enableArcLinkLabels = (props.enableArcLinkLabels as boolean) ?? true;
  const activeOuterRadiusOffset =
    (props.activeOuterRadiusOffset as number) ?? 8;

  return (
    <div style={{ height }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={innerRadius}
        padAngle={padAngle}
        cornerRadius={cornerRadius}
        activeOuterRadiusOffset={activeOuterRadiusOffset}
        colors={{ scheme: colors as "nivo" | "category10" | "paired" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLabels={enableArcLabels}
        enableArcLinkLabels={enableArcLinkLabels}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        animate={true}
      />
    </div>
  );
}
