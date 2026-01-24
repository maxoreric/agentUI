"use client";

import { Checkbox } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Checkbox Wrapper
 * @see https://www.heroui.com/docs/components/checkbox
 *
 * Props:
 * - label: string (optional) - Checkbox label text, passed as children
 * - name: string (optional) - Form field name
 * - value: string (optional) - Value when checked
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - defaultSelected: boolean (default: false)
 * - isSelected: boolean (controlled)
 * - lineThrough: boolean - Strike through label when checked
 * - isRequired: boolean
 * - isReadOnly: boolean
 * - isDisabled: boolean
 * - isIndeterminate: boolean
 */
export function HeroCheckbox({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const name = props.name as string | undefined;
  const value = props.value as string | undefined;
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = props.radius as
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full"
    | undefined;
  const defaultSelected = props.defaultSelected as boolean | undefined;
  const isSelected = props.isSelected as boolean | undefined;
  const lineThrough = props.lineThrough as boolean | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isIndeterminate = props.isIndeterminate as boolean | undefined;

  return (
    <Checkbox
      name={name}
      value={value}
      color={color}
      size={size}
      radius={radius}
      defaultSelected={defaultSelected}
      isSelected={isSelected}
      lineThrough={lineThrough}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
    >
      {label}
    </Checkbox>
  );
}
