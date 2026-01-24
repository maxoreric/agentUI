"use client";

import React from "react";
import {
  Listbox,
  ListboxItem,
  ListboxProps,
  ListboxSection,
} from "@heroui/react";

interface Item {
  key: string;
  label: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

interface HeroListboxProps extends Omit<ListboxProps, "children"> {
  items: Item[];
  aria_label?: string;
}

export const HeroListbox = ({
  items,
  selectionMode = "single",
  color = "default",
  variant = "solid",
  aria_label = "Listbox",
  className,
  onSelectionChange,
  ...props
}: HeroListboxProps) => {
  return (
    <div
      className={`w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${className || ""}`}
    >
      <Listbox
        aria-label={aria_label}
        items={items}
        selectionMode={selectionMode}
        color={color}
        variant={variant}
        onSelectionChange={onSelectionChange}
        {...props}
      >
        {(item: any) => {
          const listboxItem = item as Item;
          return (
            <ListboxItem
              key={listboxItem.key}
              description={listboxItem.description}
              startContent={listboxItem.startContent}
              endContent={listboxItem.endContent}
            >
              {listboxItem.label}
            </ListboxItem>
          );
        }}
      </Listbox>
    </div>
  );
};
