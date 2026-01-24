"use client";

import { Avatar } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Avatar Wrapper
 * @see https://www.heroui.com/docs/components/avatar
 *
 * Props:
 * - src: string (optional)
 * - name: string (optional) - Initials displayed if src missing
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - radius: "none" | "sm" | "md" | "lg" | "full" (default: "full")
 * - isBordered: boolean (default: false)
 * - isDisabled: boolean (default: false)
 */
export function HeroAvatar({ element }: ComponentRenderProps) {
  const { props } = element;

  const src = props.src as string | undefined;
  const name = props.name as string | undefined;
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const radius =
    (props.radius as "none" | "sm" | "md" | "lg" | "full") || "full";
  const isBordered = props.isBordered as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <Avatar
      src={src}
      name={name}
      size={size}
      color={color}
      radius={radius}
      isBordered={isBordered}
      isDisabled={isDisabled}
    />
  );
}
