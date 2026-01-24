"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

interface ListItem {
  key?: string;
  icon: string; // Material symbol name
  title: string;
  desc: string;
  time: string;
  color?:
    | "neon-blue"
    | "neon-purple"
    | "neon-green"
    | "amber-500"
    | "rose-500"
    | "white";
}

/**
 * NeonListCard
 * Based on the "Live Operations" card.
 *
 * Props:
 * - title: string ("Live Operations")
 * - items: ListItem[]
 * - actionText: string ("Full Analytics") - optional bottom button text
 */
export function NeonListCard({ element }: ComponentRenderProps) {
  const { props } = element;

  const title = props.title as string;
  const items = (props.items as ListItem[]) || [];
  const actionText = props.actionText as string | undefined;

  const colorMap: Record<string, string> = {
    "neon-blue": "text-neon-blue",
    "neon-purple": "text-neon-purple",
    "neon-green": "text-neon-green",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
    white: "text-white",
  };

  const handlePress = () => {
    if (actionText) {
      (
        window as unknown as { __demoAction?: (text: string) => void }
      ).__demoAction?.(actionText);
    }
  };

  return (
    <div
      className={cn(
        "glass-neu-card p-8 rounded-2xl flex flex-col h-full",
        props.className as string,
      )}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-black text-white">{title}</h3>
        <button className="glass-neu-button p-2 rounded-lg text-neon-purple">
          <span className="material-symbols-outlined text-lg">filter_list</span>
        </button>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item, idx) => {
          const textColor = colorMap[item.color || "white"] || "text-white";
          return (
            <div key={item.key || idx} className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl glass-neu-inset flex items-center justify-center shrink-0">
                <span
                  className={cn("material-symbols-outlined text-xl", textColor)}
                >
                  {item.icon}
                </span>
              </div>
              <div className="flex-1 border-b border-white/5 pb-4">
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
                <span
                  className={cn(
                    "text-[10px] font-black mt-2 block uppercase tracking-tighter",
                    textColor,
                  )}
                >
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {actionText && (
        <button
          className="mt-8 w-full py-4 rounded-xl glass-neu-button text-sm font-black text-neon-purple border-neon-purple/20 transition-transform active:scale-95"
          onClick={handlePress}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
