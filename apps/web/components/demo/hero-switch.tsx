"use client";

import { Switch } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Switch Wrapper
 * @see https://www.heroui.com/docs/components/switch
 *
 * Props:
 * - label: string (optional) - Text content inside the switch
 * - size: "sm" | "md" | "lg" (default: "md")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "primary")
 * - defaultSelected: boolean (default: false)
 * - isDisabled: boolean (default: false)
 * - disableAnimation: boolean (default: false)
 */
export function HeroSwitch({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const defaultSelected = props.defaultSelected as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const disableAnimation = props.disableAnimation as boolean | undefined;

  return (
    <Switch
      size={size}
      color={color}
      defaultSelected={defaultSelected}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
    >
      {label}
    </Switch>
  );
}
