"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  NavbarProps,
} from "@heroui/react";

interface NavbarItemConfig {
  label: string;
  href?: string;
  isActive?: boolean;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

interface HeroNavbarProps extends NavbarProps {
  brandText?: string;
  brandLogo?: React.ReactNode;
  items?: NavbarItemConfig[];
  menuItems?: NavbarItemConfig[];
  isBordered?: boolean;
  isMenuOpen?: boolean;
  onMenuOpenChange?: (isOpen: boolean) => void;
  actionButtonText?: string;
  onActionClick?: () => void;
}

export const HeroNavbar = ({
  brandText = "Acme",
  brandLogo,
  items = [],
  menuItems = [],
  isBordered = false,
  actionButtonText,
  onActionClick,
  className,
  ...props
}: HeroNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered={isBordered}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={className}
      {...props}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {brandLogo}
          <p className="font-bold text-inherit ml-2">{brandText}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {brandLogo}
          <p className="font-bold text-inherit ml-2">{brandText}</p>
        </NavbarBrand>
        {items.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`} isActive={item.isActive}>
            <Link
              color={item.color || "foreground"}
              href={item.href || "#"}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        {actionButtonText && (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onPress={onActionClick}
            >
              {actionButtonText}
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href || "#"}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
