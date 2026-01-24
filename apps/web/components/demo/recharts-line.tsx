"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import type { ComponentRenderProps } from "./types";

/**
 * Recharts Line Chart Wrapper (Profile B - Clean)
 * @see https://recharts.org
 *
 * Props:
 * - data: Array<Record<string, string | number>> (required)
 *   Example: [{ name: "Jan", value: 10 }, { name: "Feb", value: 20 }]
 * - dataKey: string (default: "value") - Key for Y-axis values
 * - xAxisKey: string (default: "name") - Key for X-axis labels
 * - height: number (default: 300) - Chart container height in pixels
 * - stroke: string (default: "#8884d8") - Line color
 * - strokeWidth: number (default: 2) - Line thickness
 * - showGrid: boolean (default: true) - Show grid lines
 * - showTooltip: boolean (default: true) - Show hover tooltip
 * - showLegend: boolean (default: false) - Show legend
 * - dot: boolean (default: true) - Show data points
 */
export function RechartsLine({ element }: ComponentRenderProps) {
  const { props } = element;

  // Data format: [{ name: "Jan", value: 10 }]
  const data = (props.data as Array<Record<string, string | number>>) || [
    { name: "A", value: 10 },
    { name: "B", value: 25 },
    { name: "C", value: 15 },
    { name: "D", value: 30 },
    { name: "E", value: 20 },
  ];

  const dataKey = (props.dataKey as string) || "value";
  const xAxisKey = (props.xAxisKey as string) || "name";
  const height = (props.height as number) || 300;
  const stroke = (props.stroke as string) || "#8884d8";
  const strokeWidth = (props.strokeWidth as number) || 2;
  const showGrid = (props.showGrid as boolean) ?? true;
  const showTooltip = (props.showTooltip as boolean) ?? true;
  const showLegend = (props.showLegend as boolean) ?? false;
  const dot = (props.dot as boolean) ?? true;

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {showTooltip && <Tooltip />}
          {showLegend && <Legend />}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            strokeWidth={strokeWidth}
            dot={dot}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
