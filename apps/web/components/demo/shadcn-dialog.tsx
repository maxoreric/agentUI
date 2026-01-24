"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ComponentRenderProps } from "./types";

/**
 * Shadcn/ui Dialog Wrapper
 * @see https://ui.shadcn.com/docs/components/dialog
 *
 * Props:
 * - triggerLabel: string - Button text to open dialog
 * - title: string (optional) - Dialog title
 * - description: string (optional) - Dialog description
 * - footer: string (optional) - Text content for footer (simple use case)
 */
export function ShadcnDialog({ element, children }: ComponentRenderProps) {
  const { props } = element;

  const triggerLabel = props.triggerLabel as string;
  const title = props.title as string | undefined;
  const description = props.description as string | undefined;
  const footer = props.footer as string | undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        <div className="grid gap-4 py-4">{children}</div>
        {footer && (
          <DialogFooter>
            {/* If we needed footer buttons, we could accept children or specific props */}
            <p className="text-sm text-muted-foreground">{footer}</p>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
