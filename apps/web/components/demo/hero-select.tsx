"use client";

import { Select, SelectItem } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Select Wrapper
 * @see https://www.heroui.com/docs/components/select
 *
 * Props:
 * - label: string (optional)
 * - placeholder: string (default: "Select an option")
 * - items: Array<{key: string, label: string}> (required) - Select options
 * - variant: "flat" | "bordered" | "faded" | "underlined" (default: "flat")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - labelPlacement: "inside" | "outside" | "outside-left" (default: "inside")
 * - selectionMode: "single" | "multiple" (default: "single")
 * - description: string (optional) - Helper text
 * - isRequired: boolean
 * - isDisabled: boolean
 * - fullWidth: boolean (default: true)
 */
export function HeroSelect({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const placeholder = (props.placeholder as string) || "Select an option";
  const items = (props.items as Array<{ key: string; label: string }>) || [];
  const variant =
    (props.variant as "flat" | "bordered" | "faded" | "underlined") || "flat";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = props.radius as
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full"
    | undefined;
  const labelPlacement =
    (props.labelPlacement as "inside" | "outside" | "outside-left") ||
    "outside";
  const selectionMode =
    (props.selectionMode as "single" | "multiple") || "single";
  const description = props.description as string | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const fullWidth = (props.fullWidth as boolean) ?? true;

  return (
    <Select
      label={label}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      selectionMode={selectionMode}
      description={description}
      isRequired={isRequired}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
