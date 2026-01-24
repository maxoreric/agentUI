"use client";

import React from "react";
import { Kbd, KbdProps } from "@heroui/react";

interface HeroKbdProps extends KbdProps {
  children?: React.ReactNode;
}

export const HeroKbd = ({
  children,
  keys,
  className,
  ...props
}: HeroKbdProps) => {
  return (
    <Kbd keys={keys} className={className} {...props}>
      {children}
    </Kbd>
  );
};
