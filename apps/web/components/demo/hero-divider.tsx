"use client";

import { Divider } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Divider Wrapper
 * @see https://www.heroui.com/docs/components/divider
 *
 * Props:
 * - orientation: "horizontal" | "vertical" (default: "horizontal")
 * - className: string (optional) - For width/height adjustments
 */
export function HeroDivider({ element }: ComponentRenderProps) {
  const { props } = element;

  const orientation =
    (props.orientation as "horizontal" | "vertical") || "horizontal";
  const className = props.className as string | undefined;

  return <Divider orientation={orientation} className={className} />;
}
