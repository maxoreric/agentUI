"use client";

import type { ComponentRenderProps } from "@json-render/react";

export function Button({ element, onAction, loading }: ComponentRenderProps) {
  const { props } = element;
  const variant = props.variant as string | undefined;
  const label = props.label as string;
  const action = props.action as string | undefined;

  const btnClass =
    variant === "danger"
      ? "bg-red-500 text-white hover:bg-red-600"
      : variant === "secondary"
        ? "bg-card border border-border text-foreground hover:bg-muted"
        : "bg-foreground text-background hover:opacity-90";

  const handleClick = () => {
    if (action && onAction) {
      // Pass the action name and collect all form data
      onAction({ name: action });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`px-4 py-2 rounded text-sm font-medium transition-all disabled:opacity-50 ${btnClass}`}
    >
      {loading ? "Loading..." : label}
    </button>
  );
}
