"use client";

import { ScrollShadow } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI ScrollShadow Wrapper
 * @see https://www.heroui.com/docs/components/scroll-shadow
 *
 * Props:
 * - orientation: "horizontal" | "vertical" (default: "vertical")
 * - hideScrollBar: boolean (default: false)
 * - size: number (shadow size, default: 40)
 * - offset: number (shadow offset, default: 0)
 * - isEnabled: boolean (default: true)
 * - visibility: "auto" | "top" | "bottom" | "left" | "right" | "both" | "none" (default: "auto")
 */
export function HeroScrollShadow({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const orientation =
    (props.orientation as "horizontal" | "vertical") || "vertical";
  const hideScrollBar = props.hideScrollBar as boolean | undefined;
  const size = props.size as number | undefined;
  const offset = props.offset as number | undefined;
  const isEnabled = props.isEnabled as boolean | undefined;
  const visibility = props.visibility as
    | "auto"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "both"
    | "none"
    | undefined;

  return (
    <ScrollShadow
      orientation={orientation}
      hideScrollBar={hideScrollBar}
      size={size}
      offset={offset}
      isEnabled={isEnabled}
      visibility={visibility}
      className={props.className as string}
    >
      {children}
    </ScrollShadow>
  );
}
