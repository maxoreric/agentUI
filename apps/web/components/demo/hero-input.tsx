"use client";

import { Input } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Input Wrapper
 * @see https://www.heroui.com/docs/components/input
 *
 * Props:
 * - label: string (optional)
 * - placeholder: string (optional)
 * - type: "text" | "email" | "url" | "password" | "tel" | "search" (default: "text")
 * - variant: "flat" | "bordered" | "faded" | "underlined" (default: "flat")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - labelPlacement: "inside" | "outside" | "outside-left" (default: "inside")
 * - description: string (optional) - Helper text
 * - isRequired: boolean
 * - isReadOnly: boolean
 * - isDisabled: boolean
 * - isClearable: boolean
 * - fullWidth: boolean (default: true)
 * - defaultValue: string
 */
export function HeroInput({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const placeholder = props.placeholder as string | undefined;
  const type =
    (props.type as "text" | "email" | "url" | "password" | "tel" | "search") ||
    "text";
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
  const description = props.description as string | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isClearable = props.isClearable as boolean | undefined;
  const fullWidth = (props.fullWidth as boolean) ?? true;
  const defaultValue = props.defaultValue as string | undefined;

  return (
    <Input
      label={label}
      placeholder={placeholder}
      type={type}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      description={description}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isClearable={isClearable}
      fullWidth={fullWidth}
      defaultValue={defaultValue}
    />
  );
}
