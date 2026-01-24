"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownProps,
  DropdownMenuProps,
  DropdownItemProps,
} from "@heroui/react";

interface HeroDropdownItem extends DropdownItemProps {
  key: string;
  label: string;
  description?: string;
  shortcut?: string;
  startContent?: React.ReactNode;
}

interface HeroDropdownProps extends Omit<DropdownProps, "children"> {
  triggerText?: string;
  triggerVariant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  triggerColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  items: HeroDropdownItem[];
  menuProps?: Partial<DropdownMenuProps>;
  onAction?: (key: React.Key) => void;
}

export const HeroDropdown = ({
  triggerText = "Open Menu",
  triggerVariant = "solid",
  triggerColor = "primary",
  items = [],
  menuProps,
  onAction,
  className,
  ...props
}: HeroDropdownProps) => {
  return (
    <Dropdown className={className} {...props}>
      <DropdownTrigger>
        <Button variant={triggerVariant} color={triggerColor}>
          {triggerText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        items={items}
        onAction={onAction}
        {...menuProps}
      >
        {(item: any) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
            description={item.description}
            shortcut={item.shortcut}
            startContent={item.startContent}
            {...item}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
