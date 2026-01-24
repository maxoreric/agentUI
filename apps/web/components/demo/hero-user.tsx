"use client";

import { User } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI User Wrapper
 * @see https://www.heroui.com/docs/components/user
 *
 * Props:
 * - name: string (required)
 * - description: string (optional)
 * - avatarSrc: string (optional)
 * - isFocusable: boolean (default: false)
 */
export function HeroUser({ element }: ComponentRenderProps) {
  const { props } = element;

  const name = (props.name as string) || "Jane Doe";
  const description = props.description as string | undefined;
  const avatarSrc = props.avatarSrc as string | undefined;
  const isFocusable = props.isFocusable as boolean | undefined;

  return (
    <User
      name={name}
      description={description}
      avatarProps={{
        src: avatarSrc || "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      }}
      isFocusable={isFocusable}
    />
  );
}
