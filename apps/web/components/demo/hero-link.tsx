"use client";

import React from "react";
import { Link } from "@heroui/react";

import type { ComponentRenderProps } from "./types";

export function HeroLink({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const children = props.children as React.ReactNode;
  const showAnchorIcon = props.showAnchorIcon as boolean | undefined;
  const isExternal = props.isExternal as boolean | undefined;
  const color =
    (props.color as
      | "primary"
      | "foreground"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const underline =
    (props.underline as "none" | "hover" | "always" | "active" | "focus") ||
    "hover";
  const href = (props.href as string) || "#";
  const className = props.className as string | undefined;

  return (
    <Link
      showAnchorIcon={showAnchorIcon}
      isExternal={isExternal}
      color={color}
      size={size}
      underline={underline}
      href={href}
      className={className}
    >
      {label || children || "Link"}
    </Link>
  );
}
