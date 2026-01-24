"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { ComponentRenderProps } from "./types";

/**
 * shadcn/ui Card Wrapper (Profile B - Clean)
 * @see https://ui.shadcn.com/docs/components/card
 *
 * Props:
 * - title: string (optional) - Card header title
 * - description: string (optional) - Card header description
 * - footer: string (optional) - Card footer text
 * - className: string (optional)
 */
export function ShadcnCard({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const title = props.title as string | undefined;
  const description = props.description as string | undefined;
  const footer = props.footer as string | undefined;
  const className = props.className as string | undefined;

  return (
    <Card className={className}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
}
