"use client";

import { Textarea } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Textarea Wrapper
 * @see https://www.heroui.com/docs/components/textarea
 *
 * Props:
 * - label: string (optional)
 * - placeholder: string (optional)
 * - variant: "flat" | "bordered" | "faded" | "underlined" (default: "flat")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - labelPlacement: "inside" | "outside" | "outside-left" (default: "inside")
 * - minRows: number (default: 3)
 * - maxRows: number (default: 8)
 * - description: string (optional) - Helper text
 * - isRequired: boolean
 * - isReadOnly: boolean
 * - isDisabled: boolean
 * - isClearable: boolean
 * - disableAutosize: boolean
 * - defaultValue: string
 */
export function HeroTextarea({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const placeholder = props.placeholder as string | undefined;
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
  const minRows = (props.minRows as number) || 3;
  const maxRows = (props.maxRows as number) || 8;
  const description = props.description as string | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isClearable = props.isClearable as boolean | undefined;
  const disableAutosize = props.disableAutosize as boolean | undefined;
  const defaultValue = props.defaultValue as string | undefined;

  return (
    <Textarea
      label={label}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      minRows={minRows}
      maxRows={maxRows}
      description={description}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isClearable={isClearable}
      disableAutosize={disableAutosize}
      defaultValue={defaultValue}
    />
  );
}
