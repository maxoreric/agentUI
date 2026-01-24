"use client";

import { Button } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Button Wrapper
 * @see https://www.heroui.com/docs/components/button
 *
 * Props:
 * - label: string (required) - Button text
 * - variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" (default: "solid")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - isLoading: boolean
 * - isDisabled: boolean
 * - fullWidth: boolean
 * - actionText: string (for demo action callback)
 */
export function HeroButton({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string;
  const actionText = (props.actionText as string) || label;
  const variant =
    (props.variant as
      | "solid"
      | "bordered"
      | "light"
      | "flat"
      | "faded"
      | "shadow"
      | "ghost") || "solid";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = props.radius as
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full"
    | undefined;
  const isLoading = props.isLoading as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const fullWidth = props.fullWidth as boolean | undefined;

  const handlePress = () => {
    (
      window as unknown as { __demoAction?: (text: string) => void }
    ).__demoAction?.(actionText);
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      isLoading={isLoading}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
      onPress={handlePress}
    >
      {label}
    </Button>
  );
}
