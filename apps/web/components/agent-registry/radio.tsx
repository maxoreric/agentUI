"use client";

import type { ComponentRenderProps } from "@json-render/react";
import { useDataBinding } from "@json-render/react";

export function Radio({ element }: ComponentRenderProps) {
  const { props } = element;
  const label = props.label as string;
  const options = (props.options as string[]) || [];
  const bindPath = props.bindPath as string | undefined;
  const name = props.name as string | undefined;
  const [value, setValue] = useDataBinding(
    bindPath || (name ? `/${name}` : ""),
  );

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none">{label}</label>
      )}
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <div
            key={opt}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setValue(opt)}
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                value === opt ? "border-primary" : "border-muted-foreground"
              }`}
            >
              {value === opt && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </div>
            <span className="text-sm">{opt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
