"use client";

import React from "react";
import { RangeCalendar } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI RangeCalendar Wrapper
 * Adapted from official docs: https://www.heroui.com/docs/components/range-calendar
 */
export function HeroRangeCalendar({ element }: ComponentRenderProps) {
  const { props } = element;
  const className = props.className as string | undefined;

  // Direct copy from official docs (with slight adaptation for flexible initial state)
  const [value, setValue] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 }),
  });

  return (
    <div
      className={`p-4 border border-default-200 rounded-lg inline-block bg-background ${className}`}
    >
      <RangeCalendar
        aria-label="Date (Controlled)"
        value={value}
        onChange={setValue}
      />
      <div className="mt-4 text-xs text-default-500">
        Selected: {value.start.toString()} to {value.end.toString()}
      </div>
    </div>
  );
}
