"use client";

import React from "react";
import { DateInput } from "@heroui/react";

/**
 * HeroUI DateInput Wrapper
 * @see https://www.heroui.com/docs/components/date-input
 */
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI DateInput Wrapper
 * @see https://www.heroui.com/docs/components/date-input
 *
 * Props:
 * - label: string
 * - variant: "flat" | "bordered" | "faded" | "underlined"
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
 * - size: "sm" | "md" | "lg"
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - labelPlacement: "inside" | "outside" | "outside-left"
 * - isRequired: boolean
 * - isReadOnly: boolean
 * - isDisabled: boolean
 * - description: string
 * - errorMessage: string
 */
export function HeroDateInput({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
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
    (props.labelPlacement as "inside" | "outside" | "outside-left") || "inside";
  const startContent = props.startContent as React.ReactNode;
  const endContent = props.endContent as React.ReactNode;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const description = props.description as string | undefined;
  const errorMessage = props.errorMessage as string | undefined;
  const className = props.className as string | undefined;

  return (
    <DateInput
      label={label}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      startContent={startContent}
      endContent={endContent}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isRequired={isRequired}
      description={description}
      errorMessage={errorMessage}
      className={className}
    />
  );
}
