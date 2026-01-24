"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Card Wrapper
 * @see https://www.heroui.com/docs/components/card
 *
 * Props:
 * - title: string (optional) - Card header title
 * - description: string (optional) - Card header description
 * - footer: string (optional) - Card footer text
 * - shadow: "none" | "sm" | "md" | "lg" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" (default: "lg")
 * - isHoverable: boolean
 * - isPressable: boolean
 * - isBlurred: boolean
 * - className: string
 */
export function HeroCard({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const title = props.title as string | undefined;
  const description = props.description as string | undefined;
  const footer = props.footer as string | undefined;
  const shadow = (props.shadow as "none" | "sm" | "md" | "lg") || "md";
  const radius = (props.radius as "none" | "sm" | "md" | "lg") || "lg";
  const isHoverable = props.isHoverable as boolean | undefined;
  const isPressable = props.isPressable as boolean | undefined;
  const isBlurred = props.isBlurred as boolean | undefined;
  const className = props.className as string | undefined;

  const handlePress = () => {
    if (isPressable && props.actionText) {
      (
        window as unknown as { __demoAction?: (text: string) => void }
      ).__demoAction?.(props.actionText as string);
    }
  };

  return (
    <Card
      shadow={shadow}
      radius={radius}
      isHoverable={isHoverable}
      isPressable={isPressable}
      isBlurred={isBlurred}
      className={className}
      onPress={isPressable ? handlePress : undefined}
    >
      {(title || description) && (
        <CardHeader className="flex flex-col items-start">
          {title && <h4 className="font-semibold text-large">{title}</h4>}
          {description && (
            <p className="text-small text-default-500">{description}</p>
          )}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && (
        <CardFooter>
          <p className="text-small text-default-500">{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}
