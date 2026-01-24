"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

/**
 * BentoCard - Base container for the "Bento-Material Hybrid" design.
 * @see User Provided HTML (Bento-Material Hybrid Dashboard)
 *
 * Props:
 * - className: string
 * - variant: "default" | "sky" | "mint" | "lavender" (Color tint)
 * - colSpan: number (1-6) - mapped to className "col-span-X"
 */
export function BentoCard({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const variant = (props.variant as string) || "default";
  const colSpan = (props.colSpan as number) || 1;

  const variantStyles: Record<string, string> = {
    default: "bg-[#ecf0f3]",
    sky: "tile-sky",
    mint: "tile-mint",
    lavender: "tile-lavender",
  };

  const colSpanClass =
    colSpan > 1
      ? `md:col-span-${Math.min(colSpan, 2)} lg:col-span-${colSpan}`
      : "col-span-1";

  return (
    <div
      className={cn(
        "bento-tile flex flex-col",
        variantStyles[variant] || variantStyles.default,
        colSpanClass,
        props.className as string,
      )}
    >
      {/* Direct children rendering */}
      {children}
    </div>
  );
}
