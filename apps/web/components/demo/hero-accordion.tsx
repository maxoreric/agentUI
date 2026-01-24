"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Accordion Wrapper
 * @see https://www.heroui.com/docs/components/accordion
 *
 * Props:
 * - items: Array<{key: string, title: string, subtitle?: string, content: string}> (required)
 * - variant: "light" | "shadow" | "bordered" | "splitted" (default: "light")
 * - selectionMode: "single" | "multiple" (default: "single")
 * - isCompact: boolean (default: false)
 * - showDivider: boolean (default: true)
 * - isDisabled: boolean (default: false)
 * - disableAnimation: boolean (default: false)
 * - defaultExpandedKeys: string[] (optional)
 */
export function HeroAccordion({ element }: ComponentRenderProps) {
  const { props } = element;

  const items =
    (props.items as Array<{
      key: string;
      title: string;
      subtitle?: string;
      content: string;
    }>) || [];

  const variant =
    (props.variant as "light" | "shadow" | "bordered" | "splitted") || "light";
  const selectionMode =
    (props.selectionMode as "single" | "multiple") || "single";
  const isCompact = props.isCompact as boolean | undefined;
  const showDivider = (props.showDivider as boolean) ?? true;
  const isDisabled = props.isDisabled as boolean | undefined;
  const disableAnimation = props.disableAnimation as boolean | undefined;
  const defaultExpandedKeys = props.defaultExpandedKeys as string[] | undefined;

  return (
    <Accordion
      variant={variant}
      selectionMode={selectionMode}
      isCompact={isCompact}
      showDivider={showDivider}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
      defaultExpandedKeys={defaultExpandedKeys}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.title}
          title={item.title}
          subtitle={item.subtitle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
