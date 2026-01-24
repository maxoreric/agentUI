"use client";

import { Badge, Avatar } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Badge Wrapper
 * @see https://www.heroui.com/docs/components/badge
 *
 * Props:
 * - content: string | number (default: 5)
 * - variant: "solid" | "flat" | "faded" | "shadow" (default: "solid")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "danger")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - placement: "top-right" | "top-left" | "bottom-right" | "bottom-left" (default: "top-right")
 * - shape: "circle" | "rectangle" (default: "rectangle")
 * - showOutline: boolean (default: true)
 * - isInvisible: boolean (default: false)
 */
export function HeroBadge({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const content = (props.content as string | number) ?? 5;
  const variant =
    (props.variant as "solid" | "flat" | "faded" | "shadow") || "solid";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "danger";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const placement =
    (props.placement as
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left") || "top-right";
  const shape = (props.shape as "circle" | "rectangle") || "rectangle";
  const showOutline = (props.showOutline as boolean) ?? true;
  const isInvisible = props.isInvisible as boolean | undefined;

  // Default child if none provided (Avatar)
  const childContent = children || (
    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" radius="md" />
  );

  return (
    <Badge
      content={content}
      variant={variant}
      color={color}
      size={size}
      placement={placement}
      shape={shape}
      showOutline={showOutline}
      isInvisible={isInvisible}
    >
      {childContent}
    </Badge>
  );
}
