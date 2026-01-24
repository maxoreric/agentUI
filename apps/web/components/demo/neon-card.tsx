"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

/**
 * NeonCard - Ultimate Dark Hybrid Bento Dashboard Card
 * @see https://github.com/vercel-labs/json-render/blob/main/apps/web/u/neon-bento
 *
 * Props:
 * - className: custom classes
 * - variant: "default" | "inset" (default: "default")
 * - gradient: boolean (optional overlay gradient)
 */
export function NeonCard({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const variant = (props.variant as "default" | "inset") || "default";
  const gradient = props.gradient as boolean | undefined;

  return (
    <div
      className={cn(
        variant === "inset" ? "glass-neu-inset" : "glass-neu-card",
        "rounded-2xl p-6 transition-all duration-300",
        props.className as string,
      )}
    >
      {/* Optional gradient overlay for extra "pop" if requested */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Helper for Neon Buttons using the same glassmorphism
 */
export function NeonButton({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string;
  const actionText = (props.actionText as string) || label;

  const handlePress = () => {
    (
      window as unknown as { __demoAction?: (text: string) => void }
    ).__demoAction?.(actionText);
  };

  return (
    <button
      className={cn(
        "glass-neu-button px-6 py-3 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-transform active:scale-95",
        props.className as string,
      )}
      onClick={handlePress}
    >
      {label}
    </button>
  );
}
