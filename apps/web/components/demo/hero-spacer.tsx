"use client";

import { Spacer } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Spacer Wrapper
 * @see https://www.heroui.com/docs/components/spacer
 *
 * Props:
 * - x: number (Horizontal space, unit based on theme layout)
 * - y: number (Vertical space, unit based on theme layout)
 */
export function HeroSpacer({ element }: ComponentRenderProps) {
  const { props } = element;

  const x = props.x as any;
  const y = props.y as any;

  return <Spacer x={x} y={y} className={props.className as string} />;
}
