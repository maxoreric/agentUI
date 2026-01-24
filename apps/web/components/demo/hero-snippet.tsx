"use client";

import React from "react";
import { Snippet, SnippetProps } from "@heroui/react";

interface HeroSnippetProps extends SnippetProps {
  children?: React.ReactNode | string[];
}

export const HeroSnippet = ({
  children,
  symbol = "$",
  variant = "flat",
  color = "default",
  className,
  ...props
}: HeroSnippetProps) => {
  return (
    <Snippet
      symbol={symbol}
      variant={variant}
      color={color}
      className={className}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))
        : children}
    </Snippet>
  );
};
