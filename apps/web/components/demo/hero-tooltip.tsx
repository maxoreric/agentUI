"use client";

import { Tooltip, Button } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Tooltip Wrapper
 * @see https://www.heroui.com/docs/components/tooltip
 *
 * Props:
 * - triggerLabel: string (default: "Hover me") - Button text that triggers tooltip
 * - content: string (required) - Tooltip content text
 * - placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" (default: "top")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - showArrow: boolean (default: false)
 * - delay: number (default: 0) - Delay before showing tooltip in ms
 * - closeDelay: number (default: 500) - Delay before hiding tooltip in ms
 * - offset: number (default: 7)
 * - isDisabled: boolean
 */
export function HeroTooltip({ element }: ComponentRenderProps) {
  const { props } = element;

  const triggerLabel = (props.triggerLabel as string) || "Hover me";
  const content = (props.content as string) || "Tooltip content";
  const placement =
    (props.placement as
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "top-start"
      | "top-end"
      | "bottom-start"
      | "bottom-end") || "top";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const showArrow = props.showArrow as boolean | undefined;
  const delay = (props.delay as number) ?? 0;
  const closeDelay = (props.closeDelay as number) ?? 500;
  const offset = (props.offset as number) ?? 7;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <Tooltip
      content={content}
      placement={placement}
      color={color}
      size={size}
      showArrow={showArrow}
      delay={delay}
      closeDelay={closeDelay}
      offset={offset}
      isDisabled={isDisabled}
    >
      <Button color={color} variant="flat">
        {triggerLabel}
      </Button>
    </Tooltip>
  );
}
