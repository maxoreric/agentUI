"use client";

import { CircularProgress } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Circular Progress Wrapper
 * @see https://www.heroui.com/docs/components/circular-progress
 *
 * Props:
 * - label: string (optional)
 * - value: number (default: 0)
 * - minValue: number (default: 0)
 * - maxValue: number (default: 100)
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - showValueLabel: boolean (default: false)
 * - isIndeterminate: boolean (default: false)
 * - strokeWidth: number (optional)
 * - isDisabled: boolean (default: false)
 */
export function HeroCircularProgress({ element }: ComponentRenderProps) {
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
  const showValueLabel = props.showValueLabel as boolean | undefined;
  const isIndeterminate = props.isIndeterminate as boolean | undefined;
  const strokeWidth = props.strokeWidth as number | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <CircularProgress
      aria-label={label || "Loading..."} // Accessibility
      label={label}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      size={size}
      color={color}
      showValueLabel={showValueLabel}
      isIndeterminate={isIndeterminate}
      strokeWidth={strokeWidth}
      isDisabled={isDisabled}
    />
  );
}
