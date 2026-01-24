"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import type { ComponentRenderProps } from "./types";

/**
 * HeroUI Modal Wrapper
 * @see https://www.heroui.com/docs/components/modal
 *
 * Note: For demo purposes, this modal is controlled by an internal trigger.
 * In production, you'd typically control isOpen/onClose externally.
 *
 * Props:
 * - title: string (optional) - Modal header title
 * - description: string (optional) - Modal body text
 * - footerText: string (optional) - Footer text
 * - triggerLabel: string (default: "Open Modal") - Button label to trigger modal
 * - size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" (default: "md")
 * - radius: "none" | "sm" | "md" | "lg" (default: "lg")
 * - backdrop: "transparent" | "opaque" | "blur" (default: "opaque")
 * - placement: "auto" | "top" | "center" | "bottom" (default: "auto")
 * - scrollBehavior: "normal" | "inside" | "outside" (default: "normal")
 * - isDismissable: boolean (default: true)
 * - hideCloseButton: boolean (default: false)
 */
export function HeroModal({ element, children }: ComponentRenderProps) {
  const { props } = element;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const title = props.title as string | undefined;
  const description = props.description as string | undefined;
  const footerText = props.footerText as string | undefined;
  const triggerLabel = (props.triggerLabel as string) || "Open Modal";
  const size =
    (props.size as
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "full") || "md";
  const radius = (props.radius as "none" | "sm" | "md" | "lg") || "lg";
  const backdrop =
    (props.backdrop as "transparent" | "opaque" | "blur") || "opaque";
  const placement =
    (props.placement as "auto" | "top" | "center" | "bottom") || "auto";
  const scrollBehavior =
    (props.scrollBehavior as "normal" | "inside" | "outside") || "normal";
  const isDismissable = (props.isDismissable as boolean) ?? true;
  const hideCloseButton = props.hideCloseButton as boolean | undefined;

  return (
    <>
      <button
        onClick={onOpen}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
      >
        {triggerLabel}
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
        radius={radius}
        backdrop={backdrop}
        placement={placement}
        scrollBehavior={scrollBehavior}
        isDismissable={isDismissable}
        hideCloseButton={hideCloseButton}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {title && (
                <ModalHeader className="flex flex-col gap-1">
                  {title}
                </ModalHeader>
              )}
              <ModalBody>
                {description && <p>{description}</p>}
                {children}
              </ModalBody>
              {footerText && (
                <ModalFooter>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-danger text-white rounded-md hover:opacity-90"
                  >
                    Close
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90"
                  >
                    {footerText}
                  </button>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
