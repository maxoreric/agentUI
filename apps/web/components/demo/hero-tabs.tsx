"use client";

import { Tabs, Tab } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Tabs Wrapper
 * @see https://www.heroui.com/docs/components/tabs
 *
 * Props:
 * - tabs: Array<{key: string, title: string, content?: string}> (required) - Tab items
 * - variant: "solid" | "bordered" | "light" | "underlined" (default: "solid")
 * - color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" (default: "default")
 * - size: "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" | "full"
 * - placement: "top" | "bottom" | "start" | "end" (default: "top")
 * - isVertical: boolean (default: false)
 * - fullWidth: boolean (default: false)
 * - isDisabled: boolean
 * - defaultSelectedKey: string
 * - disabledKeys: string[]
 */
export function HeroTabs({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const tabs =
    (props.tabs as Array<{ key: string; title: string; content?: string }>) ||
    [];
  const variant =
    (props.variant as "solid" | "bordered" | "light" | "underlined") || "solid";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = props.radius as
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full"
    | undefined;
  const placement =
    (props.placement as "top" | "bottom" | "start" | "end") || "top";
  const isVertical = props.isVertical as boolean | undefined;
  const fullWidth = props.fullWidth as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const defaultSelectedKey = props.defaultSelectedKey as string | undefined;
  const disabledKeys = props.disabledKeys as string[] | undefined;

  // If no tabs provided, render children directly
  if (tabs.length === 0) {
    return <div>{children}</div>;
  }

  return (
    <Tabs
      aria-label="Tabs"
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      placement={placement}
      isVertical={isVertical}
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      defaultSelectedKey={defaultSelectedKey}
      disabledKeys={disabledKeys}
    >
      {tabs.map((tab) => (
        <Tab key={tab.key} title={tab.title}>
          <div className="p-4">{tab.content || `Content for ${tab.title}`}</div>
        </Tab>
      ))}
    </Tabs>
  );
}
