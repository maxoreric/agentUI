"use client";

import { Progress } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Progress Wrapper
 * @see https://www.heroui.com/docs/components/progress
 *
 * Props:
 * - label: string (optional)
 * - value: number (default: 0)
 * - minValue: number (default: 0)
 * - maxValue: number (default: 100)
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - radius: "none" | "sm" | "md" | "lg" | "full" (default: "full")
 * - showValueLabel: boolean (default: false)
 * - isStriped: boolean (default: false)
 * - isIndeterminate: boolean (default: false)
 * - isDisabled: boolean (default: false)
 */
export function HeroProgress({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const value = (props.value as number) ?? 0;
  const minValue = (props.minValue as number) ?? 0;
  const maxValue = (props.maxValue as number) ?? 100;
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const radius =
    (props.radius as "none" | "sm" | "md" | "lg" | "full") || "full";
  const showValueLabel = props.showValueLabel as boolean | undefined;
  const isStriped = props.isStriped as boolean | undefined;
  const isIndeterminate = props.isIndeterminate as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <Progress
      aria-label={label || "Loading..."} // Accessibility
      label={label}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      size={size}
      color={color}
      radius={radius}
      showValueLabel={showValueLabel}
      isStriped={isStriped}
      isIndeterminate={isIndeterminate}
      isDisabled={isDisabled}
    />
  );
}
