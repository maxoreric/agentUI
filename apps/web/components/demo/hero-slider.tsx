"use client";

import { Slider } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Slider Wrapper
 * @see https://www.heroui.com/docs/components/slider
 *
 * Props:
 * - label: string (optional)
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - step: number (default: 1)
 * - minValue: number (default: 0)
 * - maxValue: number (default: 100)
 * - defaultValue: number | number[] (default: 0)
 * - showSteps: boolean (default: false)
 * - showTooltip: boolean (default: false)
 * - showOutline: boolean (default: false)
 * - hideValue: boolean (default: false)
 * - hideThumb: boolean (default: false)
 * - isDisabled: boolean (default: false)
 */
export function HeroSlider({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const color =
    (props.color as
      | "foreground"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const step = (props.step as number) ?? 1;
  const minValue = (props.minValue as number) ?? 0;
  const maxValue = (props.maxValue as number) ?? 100;
  const defaultValue = props.defaultValue as number | number[] | undefined;
  const showSteps = props.showSteps as boolean | undefined;
  const showTooltip = props.showTooltip as boolean | undefined;
  const showOutline = props.showOutline as boolean | undefined;
  const hideValue = props.hideValue as boolean | undefined;
  const hideThumb = props.hideThumb as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <Slider
      label={label}
      size={size}
      color={color}
      step={step}
      minValue={minValue}
      maxValue={maxValue}
      defaultValue={defaultValue}
      showSteps={showSteps}
      showTooltip={showTooltip}
      showOutline={showOutline}
      hideValue={hideValue}
      hideThumb={hideThumb}
      isDisabled={isDisabled}
    />
  );
}
