"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { ComponentRenderProps } from "./types";

/**
 * shadcn/ui Tabs Wrapper (Profile B - Clean)
 * @see https://ui.shadcn.com/docs/components/tabs
 *
 * Props:
 * - tabs: Array<{key: string, title: string, content?: string}> (required) - Tab items
 * - defaultValue: string (optional) - Default selected tab key
 * - className: string (optional)
 */
export function ShadcnTabs({ element }: ComponentRenderProps) {
  const { props } = element;

  const tabs =
    (props.tabs as Array<{ key: string; title: string; content?: string }>) ||
    [];
  const defaultValue = (props.defaultValue as string) || tabs[0]?.key;
  const className = props.className as string | undefined;

  if (tabs.length === 0) {
    return <div className="text-muted-foreground">No tabs provided</div>;
  }

  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.key} value={tab.key}>
          <div className="p-4 rounded-md border bg-background">
            {tab.content || `Content for ${tab.title}`}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
