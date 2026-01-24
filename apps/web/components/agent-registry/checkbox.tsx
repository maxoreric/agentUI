"use client";

import type { ComponentRenderProps } from "@json-render/react";
import { useDataBinding } from "@json-render/react";

export function Checkbox({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string;
  const bindPath = props.bindPath as string | undefined;
  const name = props.name as string | undefined;
  const [value, setValue] = useDataBinding(
    bindPath || (name ? `/${name}` : ""),
  );

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        role="checkbox"
        aria-checked={Boolean(value)}
        onClick={() => setValue(!value)}
        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
          value ? "bg-primary border-primary" : "border-muted-foreground"
        }`}
      >
        {Boolean(value) && (
          <svg
            className="w-3 h-3 text-primary-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
      {label && (
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          onClick={() => setValue(!value)}
        >
          {label}
        </label>
      )}
    </div>
  );
}
