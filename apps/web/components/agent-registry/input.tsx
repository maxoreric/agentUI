"use client";

import type { ComponentRenderProps } from "@json-render/react";
import { useDataBinding } from "@json-render/react";

export function Input({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string | undefined;
  const bindPath = props.bindPath as string | undefined;
  const name = props.name as string | undefined;
  const placeholder = props.placeholder as string | undefined;
  const type = (props.type as string) || "text";

  // Use name as bindPath if not provided (prepend / if needed)
  const effectivePath =
    bindPath || (name ? (name.startsWith("/") ? name : `/${name}`) : "");

  // Use data binding if bindPath is provided
  const [value, setValue] = useDataBinding(effectivePath);

  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm text-muted-foreground block">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder || ""}
        value={(value as string) || ""}
        onChange={(e) => setValue(e.target.value)}
        className="h-9 w-full bg-background border border-border rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}
