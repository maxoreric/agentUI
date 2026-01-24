"use client";

import React from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

import type { ComponentRenderProps } from "./types";

export function HeroAutocomplete({ element }: ComponentRenderProps) {
  const { props } = element;

  const label = props.label as string | undefined;
  const placeholder = props.placeholder as string | undefined;
  const variant =
    (props.variant as "flat" | "bordered" | "faded" | "underlined") || "flat";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const size = (props.size as "sm" | "md" | "lg") || "md";
  const radius = props.radius as
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full"
    | undefined;
  const labelPlacement =
    (props.labelPlacement as "inside" | "outside" | "outside-left") || "inside";
  const startContent = props.startContent as React.ReactNode;
  const endContent = props.endContent as React.ReactNode;
  const isReadOnly = props.isReadOnly as boolean | undefined;
  const isDisabled = props.isDisabled as boolean | undefined;
  const isRequired = props.isRequired as boolean | undefined;
  const description = props.description as string | undefined;
  const errorMessage = props.errorMessage as string | undefined;
  const items = (props.items as any[]) || [];
  const itemValue = (props.itemValue as string) || "value";
  const itemLabel = (props.itemLabel as string) || "label";
  const className = props.className as string | undefined;

  return (
    <Autocomplete
      label={label}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      labelPlacement={labelPlacement}
      startContent={startContent}
      endContent={endContent}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isRequired={isRequired}
      description={description}
      errorMessage={errorMessage}
      className={className}
      defaultItems={items}
    >
      {(item: any) => (
        <AutocompleteItem key={item[itemValue] || item.key || item.id}>
          {item[itemLabel] ||
            item.text ||
            item.title ||
            item.name ||
            item.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
