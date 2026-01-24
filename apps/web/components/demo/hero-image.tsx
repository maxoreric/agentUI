"use client";

import { Image } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Image Wrapper
 * @see https://www.heroui.com/docs/components/image
 *
 * Props:
 * - src: string (required)
 * - alt: string (optional)
 * - width: number (optional)
 * - height: number (optional)
 * - isBlurred: boolean (default: false)
 * - isZoomed: boolean (default: false)
 * - fallbackSrc: string (optional)
 */
export function HeroImage({ element }: ComponentRenderProps) {
  const { props } = element;

  const src =
    (props.src as string) || "https://nextui.org/images/hero-card.jpeg";
  const alt = (props.alt as string) || "Hero Image";
  const width = props.width as number | undefined;
  const height = props.height as number | undefined;
  const isBlurred = props.isBlurred as boolean | undefined;
  const isZoomed = props.isZoomed as boolean | undefined;
  const fallbackSrc = props.fallbackSrc as string | undefined;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      isBlurred={isBlurred}
      isZoomed={isZoomed}
      fallbackSrc={fallbackSrc}
    />
  );
}
