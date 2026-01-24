"use client";

import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbsProps,
  BreadcrumbItemProps,
} from "@heroui/react";

interface HeroBreadcrumbsProps extends BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
    isCurrent?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  }[];
  itemProps?: Partial<BreadcrumbItemProps>;
}

export const HeroBreadcrumbs = ({
  items = [],
  size = "md",
  color = "foreground",
  underline = "hover",
  itemProps,
  className,
  ...props
}: HeroBreadcrumbsProps) => {
  return (
    <Breadcrumbs
      size={size}
      color={color}
      underline={underline}
      className={className}
      {...props}
    >
      {items.map((item, index) => (
        <BreadcrumbItem
          key={`${item.label}-${index}`}
          href={item.href}
          isCurrent={item.isCurrent || index === items.length - 1}
          startContent={item.startContent}
          endContent={item.endContent}
          {...itemProps}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
