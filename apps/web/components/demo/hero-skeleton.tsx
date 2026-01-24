"use client";

import { Skeleton, Card } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Skeleton Wrapper
 * @see https://www.heroui.com/docs/components/skeleton
 *
 * Props:
 * - isLoaded: boolean (default: false)
 * - disableAnimation: boolean (default: false)
 * - width: string (optional) - e.g. "200px" or "100%" - Applied to wrapper div default content
 * - height: string (optional) - e.g. "20px" - Applied to wrapper div default content
 * - borderRadius: string (optional)
 *
 * Note: If no children are provided, it renders a default placeholder div.
 * In a real generator, children would be passed to show the loaded content.
 */
export function HeroSkeleton({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const isLoaded = props.isLoaded as boolean | undefined;
  const disableAnimation = props.disableAnimation as boolean | undefined;
  const width = props.width as string | undefined;
  const height = props.height as string | undefined;
  const borderRadius = props.borderRadius as string | undefined;

  // Use simulation style if no children provided
  const hasChildren =
    children && (Array.isArray(children) ? children.length > 0 : true);

  return (
    <Skeleton
      isLoaded={isLoaded}
      disableAnimation={disableAnimation}
      className={borderRadius ? `rounded-[${borderRadius}]` : "rounded-lg"}
    >
      {hasChildren ? (
        children
      ) : (
        <div
          className="bg-default-300 rounded-lg"
          style={{
            width: width || "100%",
            height: height || "150px",
          }}
        />
      )}
    </Skeleton>
  );
}
