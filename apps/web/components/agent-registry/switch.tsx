"use client";

import type { ComponentRenderProps } from "@json-render/react";
import { useDataBinding } from "@json-render/react";

export function Switch({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string;
  const bindPath = props.bindPath as string | undefined;
  const name = props.name as string | undefined;
  const [value, setValue] = useDataBinding(
    bindPath || (name ? `/${name}` : ""),
  );

  return (
    <div className="flex items-center justify-between">
      {label && <label className="text-sm font-medium">{label}</label>}
      <button
        type="button"
        role="switch"
        aria-checked={Boolean(value)}
        onClick={() => setValue(!value)}
        className={`w-9 h-5 rounded-full transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          value ? "bg-primary" : "bg-input"
        }`}
      >
        <span
          className={`block w-4 h-4 bg-background rounded-full shadow-lg transition-transform ${
            value ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}
