"use client";

import { Button } from "@/components/ui/button";
import type { ComponentRenderProps } from "./types";

/**
 * shadcn/ui Button Wrapper (Profile B - Clean)
 * @see https://ui.shadcn.com/docs/components/button
 *
 * Props:
 * - label: string (required) - Button text
 * - variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" (default: "default")
 * - size: "default" | "sm" | "lg" | "icon" (default: "default")
 * - disabled: boolean
 * - actionText: string (for demo action callback)
 * - className: string (optional)
 */
export function ShadcnButton({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string;
  const actionText = (props.actionText as string) || label;
  const variant =
    (props.variant as
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link") || "default";
  const size = (props.size as "default" | "sm" | "lg" | "icon") || "default";
  const disabled = props.disabled as boolean | undefined;
  const className = props.className as string | undefined;

  const handleClick = () => {
    (
      window as unknown as { __demoAction?: (text: string) => void }
    ).__demoAction?.(actionText);
  };

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      className={className}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
