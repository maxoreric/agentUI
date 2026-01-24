"use client";

import React from "react";
import { DateRangePicker } from "@heroui/react";

/**
 * HeroUI DateRangePicker Wrapper
 * @see https://www.heroui.com/docs/components/date-range-picker
 */

import type { ComponentRenderProps } from "./types";

export function HeroDateRangePicker({ element }: ComponentRenderProps) {
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
  const visibleMonths = (props.visibleMonths as number) || 1;
  const className = props.className as string | undefined;

  return (
    <DateRangePicker
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
      visibleMonths={visibleMonths}
      className={className}
    />
  );
}
