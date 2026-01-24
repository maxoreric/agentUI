"use client";

import React from "react";
import { Calendar } from "@heroui/react";

/**
 * HeroUI Calendar Wrapper
 * @see https://www.heroui.com/docs/components/calendar
 */

import type { ComponentRenderProps } from "./types";

export function HeroCalendar({ element }: ComponentRenderProps) {
  const { props } = element;

  const value = props.value as any;
  const defaultValue = props.defaultValue as any;
  const minValue = props.minValue as any;
  const maxValue = props.maxValue as any;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const showMonthAndYearPickers =
    (props.showMonthAndYearPickers as boolean) ?? false;
  const visibleMonths = (props.visibleMonths as number) || 1;
  const colorProp = props.color as
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  const color = (colorProp === "default" ? "primary" : colorProp) || "primary";
  const className = props.className as string | undefined;

  return (
    <Calendar
      value={value}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      showMonthAndYearPickers={showMonthAndYearPickers}
      visibleMonths={visibleMonths}
      color={color}
      className={className}
    />
  );
}
