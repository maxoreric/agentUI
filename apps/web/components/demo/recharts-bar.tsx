"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import type { ComponentRenderProps } from "./types";

// Default colors for bars
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#00C49F"];

/**
 * Recharts Bar Chart Wrapper (Profile B - Clean)
 * @see https://recharts.org
 *
 * Props:
 * - data: Array<Record<string, string | number>> (required)
 *   Example: [{ name: "A", value: 30 }, { name: "B", value: 45 }]
 * - dataKey: string (default: "value") - Key for bar values
 * - xAxisKey: string (default: "name") - Key for X-axis labels
 * - height: number (default: 300) - Chart container height in pixels
 * - fill: string (default: "#8884d8") - Bar fill color
 * - barSize: number (optional) - Width of each bar
 * - layout: "horizontal" | "vertical" (default: "horizontal")
 * - showGrid: boolean (default: true) - Show grid lines
 * - showTooltip: boolean (default: true) - Show hover tooltip
 * - showLegend: boolean (default: false) - Show legend
 * - colorful: boolean (default: false) - Use different colors for each bar
 */
export function RechartsBar({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data format: [{ name: "A", value: 30 }]
  const data = (props.data as Array<Record<string, string | number>>) || [
    { name: "A", value: 30 },
    { name: "B", value: 45 },
    { name: "C", value: 25 },
    { name: "D", value: 55 },
    { name: "E", value: 35 },
  ];

  const dataKey = (props.dataKey as string) || "value";
  const xAxisKey = (props.xAxisKey as string) || "name";
  const height = (props.height as number) || 300;
  const fill = (props.fill as string) || "#8884d8";
  const barSize = props.barSize as number | undefined;
  const layout = (props.layout as "horizontal" | "vertical") || "horizontal";
  const showGrid = (props.showGrid as boolean) ?? true;
  const showTooltip = (props.showTooltip as boolean) ?? true;
  const showLegend = (props.showLegend as boolean) ?? false;
  const colorful = props.colorful as boolean | undefined;

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={layout}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          {layout === "horizontal" ? (
            <>
              <XAxis dataKey={xAxisKey} />
              <YAxis />
            </>
          ) : (
            <>
              <XAxis type="number" />
              <YAxis dataKey={xAxisKey} type="category" />
            </>
          )}
          {showTooltip && <Tooltip />}
          {showLegend && <Legend />}
          <Bar dataKey={dataKey} fill={fill} barSize={barSize}>
            {colorful &&
              data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
