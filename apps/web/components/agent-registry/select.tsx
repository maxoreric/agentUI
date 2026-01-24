"use client";

import type { ComponentRenderProps } from "@json-render/react";
import { useDataBinding } from "@json-render/react";
import { useState } from "react";

export function Select({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string | undefined;
  const bindPath = props.bindPath as string | undefined;
  const name = props.name as string | undefined;
  const placeholder = props.placeholder as string | undefined;
  const options = (props.options as string[]) || [];

  // Data Binding
  const effectivePath =
    bindPath || (name ? (name.startsWith("/") ? name : `/${name}`) : "");
  const [value, setValue] = useDataBinding(effectivePath);

  // UI State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative space-y-1">
      {label && (
        <label className="text-sm text-muted-foreground block">{label}</label>
      )}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-full bg-background border border-border rounded px-3 text-sm flex items-center justify-between cursor-pointer hover:border-foreground/30 transition-colors"
      >
        <span
          className={value ? "text-foreground" : "text-muted-foreground/50"}
        >
          {(value as string) || placeholder || "Select..."}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && options.length > 0 && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-popover border border-border rounded shadow-md overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => {
                  setValue(opt);
                  setIsOpen(false);
                }}
                className={`px-3 py-2 text-sm text-left cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${value === opt ? "bg-accent/50" : ""}`}
              >
                {opt}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
