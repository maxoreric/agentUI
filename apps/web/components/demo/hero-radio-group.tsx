"use client";

import { RadioGroup, Radio } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI RadioGroup Wrapper
 * @see https://www.heroui.com/docs/components/radio-group
 *
 * Props:
 * - label: string (optional)
 * - orientation: "horizontal" | "vertical" (default: "vertical")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - items: Array<{value: string, label: string, description?: string}> (required)
 * - defaultValue: string (optional)
 * - isDisabled: boolean (default: false)
 * - isRequired: boolean (default: false)
 * - isInvalid: boolean (default: false)
 * - errorMessage: string (optional)
 */
export function HeroRadioGroup({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const orientation =
    (props.orientation as "horizontal" | "vertical") || "vertical";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const items =
    (props.items as Array<{
      value: string;
      label: string;
      description?: string;
    }>) || [];
  const defaultValue = props.defaultValue as string | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const isInvalid = props.isInvalid as boolean | undefined;
  const errorMessage = props.errorMessage as string | undefined;

  return (
    <RadioGroup
      label={label}
      orientation={orientation}
      color={color}
      size={size}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    >
      {items.map((item) => (
        <Radio
          key={item.value}
          value={item.value}
          description={item.description}
        >
          {item.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}
