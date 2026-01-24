"use client";

import React from "react";
import { Code } from "@heroui/react";

import type { ComponentRenderProps } from "./types";

export function HeroCode({ element }: ComponentRenderProps) {
  const { props } = element;

  // Explicitly read children from props if available as string/content
  const codeContent = props.children;

  // Note: element also has 'children' prop passed by Renderer which are nested elements.
  // If we want to support both, we'd need to check if children passed to this component are empty.
  // But since we are replacing the signature, we don't get 'children' arg automatically from Renderer in that way.
  // Wait, ComponentRenderProps has children? Yes. { element, children }.
  // BUT we want to support 'children' as a prop in JSON: {"props": {"children": "code..."}}

  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = (props.radius as "none" | "sm" | "md" | "lg" | "full") || "sm";
  const className = props.className as string | undefined;

  return (
    <Code color={color} size={size} radius={radius} className={className}>
      {codeContent as React.ReactNode}
    </Code>
  );
}
