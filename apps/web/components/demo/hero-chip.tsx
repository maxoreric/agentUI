"use client";

import { Chip, Avatar } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Chip Wrapper
 * @see https://www.heroui.com/docs/components/chip
 *
 * Props:
 * - content: string (required) - Text content
 * - variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot" (default: "solid")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full" (default: "full")
 * - avatarSrc: string (optional) - URL for avatar inside chip
 * - hasCloseButton: boolean (default: false)
 * - isDisabled: boolean (default: false)
 */
export function HeroChip({ element }: ComponentRenderProps) {
  const { props } = element;

  const content = (props.content as string) || "Chip";
  const variant =
    (props.variant as
      | "solid"
      | "bordered"
      | "light"
      | "flat"
      | "faded"
      | "shadow"
      | "dot") || "solid";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius =
    (props.radius as "none" | "sm" | "md" | "lg" | "full") || "full";
  const avatarSrc = props.avatarSrc as string | undefined;
  const hasCloseButton = props.hasCloseButton as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;

  return (
    <Chip
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      avatar={avatarSrc ? <Avatar src={avatarSrc} size="sm" /> : undefined}
      onClose={hasCloseButton ? () => console.log("Chip closed") : undefined}
      isDisabled={isDisabled}
    >
      {content}
    </Chip>
  );
}
