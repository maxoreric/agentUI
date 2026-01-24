"use client";

import React from "react";
import { Pagination } from "@heroui/react";

import type { ComponentRenderProps } from "./types";

export function HeroPagination({ element }: ComponentRenderProps) {
  const { props } = element;

  const total = (props.total as number) || 10;
  const initialPage = (props.initialPage as number) || 1;
  const showControls = (props.showControls as boolean) ?? true;
  const showShadow = (props.showShadow as boolean) ?? false;
  const color =
    (props.color as
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "primary";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const variant =
    (props.variant as "flat" | "bordered" | "faded" | "light") || "flat";
  const className = props.className as string | undefined;

  return (
    <Pagination
      total={total}
      initialPage={initialPage}
      showControls={showControls}
      showShadow={showShadow}
      color={color}
      size={size}
      variant={variant}
      className={className}
    />
  );
}
