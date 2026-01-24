"use client";

import { Badge } from "@/components/ui/badge";
import type { ComponentRenderProps } from "./types";

/**
 * shadcn/ui Badge Wrapper (Profile B - Clean)
 * @see https://ui.shadcn.com/docs/components/badge
 *
 * Props:
 * - text: string (required) - Badge text content
 * - variant: "default" | "secondary" | "destructive" | "outline" (default: "default")
 * - className: string (optional)
 */
export function ShadcnBadge({ element }: ComponentRenderProps) {
  const { props } = element;

  const text = props.text as string;
  const variant =
    (props.variant as "default" | "secondary" | "destructive" | "outline") ||
    "default";
  const className = props.className as string | undefined;

  return (
    <Badge variant={variant} className={className}>
      {text}
    </Badge>
  );
}
