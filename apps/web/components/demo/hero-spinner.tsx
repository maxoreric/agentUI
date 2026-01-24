"use client";

import { Spinner } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Spinner Wrapper
 * @see https://www.heroui.com/docs/components/spinner
 *
 * Props:
 * - label: string (optional)
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - labelColor: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - variant: "default" | "simple" | "gradient" | "wave" | "dots" | "spinner" (default: "default")
 */
export function HeroSpinner({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const color =
    (props.color as
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const labelColor =
    (props.labelColor as
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || color; // Default to same as spinner color
  const variant =
    (props.variant as
      | "default"
      | "simple"
      | "gradient"
      | "wave"
      | "dots"
      | "spinner") || "default";

  return (
    <Spinner
      label={label}
      size={size}
      color={color}
      labelColor={labelColor}
      variant={variant}
    />
  );
}
