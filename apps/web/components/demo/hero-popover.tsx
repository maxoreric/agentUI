"use client";

import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Popover Wrapper
 * @see https://www.heroui.com/docs/components/popover
 *
 * Props:
 * - triggerLabel: string (default: "Open Popover") - Button text to trigger popover
 * - title: string (optional) - Popover title
 * - content: string (optional) - Popover body text
 * - placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" (default: "bottom")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - showArrow: boolean (default: false)
 * - backdrop: "transparent" | "opaque" | "blur" (default: "transparent")
 * - offset: number (default: 7)
 */
export function HeroPopover({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const triggerLabel = (props.triggerLabel as string) || "Open Popover";
  const title = props.title as string | undefined;
  const content = props.content as string | undefined;
  const placement =
    (props.placement as
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "top-start"
      | "top-end"
      | "bottom-start"
      | "bottom-end") || "bottom";
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
  const backdrop =
    (props.backdrop as "transparent" | "opaque" | "blur") || "transparent";
  const offset = (props.offset as number) ?? 7;

  return (
    <Popover
      placement={placement}
      color={color}
      size={size}
      showArrow={showArrow}
      backdrop={backdrop}
      offset={offset}
    >
      <PopoverTrigger>
        <Button color={color}>{triggerLabel}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          {title && <div className="text-small font-bold">{title}</div>}
          {content && <div className="text-tiny">{content}</div>}
          {children}
        </div>
      </PopoverContent>
    </Popover>
  );
}
