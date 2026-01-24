"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TableProps,
  SortDescriptor,
  Selection,
} from "@heroui/react";

interface Column {
  uid: string;
  name: string;
}

import type { ComponentRenderProps } from "./types";
import { getKeyValue } from "@heroui/react";

export function HeroTable({ element }: ComponentRenderProps) {
  const { props } = element;

  const columns = (props.columns as Column[]) || [{ uid: "id", name: "ID" }];
  const items = (props.items as any[]) || [];
  const selectionMode =
    (props.selectionMode as "none" | "single" | "multiple") || "none";
  const color =
    (props.color as
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger") || "default";
  const isStriped = (props.isStriped as boolean) ?? false;
  const isHeaderSticky = (props.isHeaderSticky as boolean) ?? false;
  const ariaLabel = (props["aria-label"] as string) || "Example table";
  const className = props.className as string | undefined;

  return (
    <Table
      aria-label={ariaLabel}
      selectionMode={selectionMode}
      color={color}
      isStriped={isStriped}
      isHeaderSticky={isHeaderSticky}
      className={className}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow
            key={(item as any).id || (item as any).key || Math.random()}
          >
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
