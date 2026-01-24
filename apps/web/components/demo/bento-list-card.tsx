"use client";

import { cn } from "@/lib/utils";
import type { ComponentRenderProps } from "./types";

interface JobItem {
  id: string; // "#JOB-882"
  key?: string;
  title: string; // "Email:Send"
  status: "pending" | "queued" | "scheduled" | "done" | "error";
  time: string; // "Due: 10:45 AM"
  metaId?: string; // "ID: 882910"
  icon: string; // "mail"
}

interface TimelineMarker {
  label: string; // "Next Dispatch Window"
  subLabel: string; // "Starting in 15 mins"
}

interface FooterAlert {
  title: string;
  desc: string;
  actionLabel: string;
}

/**
 * BentoListCard - "Upcoming Jobs" Timeline Card
 *
 * Props:
 * - title: string ("Upcoming Jobs")
 * - subtitle: string
 * - items: JobItem[]
 * - marker: TimelineMarker
 * - footerAlert: FooterAlert
 */
export function BentoListCard({ element }: ComponentRenderProps) {
  const { props } = element;

  // Props Extraction
  const title = (props.title as string) || "Upcoming Jobs";
  const subtitle = (props.subtitle as string) || "Manage scheduled tasks";
  const items = (props.items as JobItem[]) || [];
  const marker = props.marker as TimelineMarker | undefined;
  const footerAlert = props.footerAlert as FooterAlert | undefined;

  // Helper: Status Colors
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "queued":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "scheduled":
        return "bg-slate-200 text-slate-600 border-slate-300";
      case "done":
        return "bg-green-100 text-green-700 border-green-200";
      case "error":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const handleAction = (action: string) => {
    (
      window as unknown as { __demoAction?: (text: string) => void }
    ).__demoAction?.(action);
  };

  return (
    <div
      className={cn(
        "bento-tile flex flex-col w-full bg-[#f3f4fa] relative p-6 sm:p-8",
        props.className as string,
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 z-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-sm mt-1 font-medium">{subtitle}</p>
        </div>
        {/* Filter Button (Mocked) */}
        <button className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-[#f3f4fa] rounded-xl neumorph-btn hover:translate-y-[1px] hover:shadow-none transition-all active:shadow-[inset_5px_5px_10px_#d1d9e6,inset_-5px_-5px_10px_#ffffff] text-slate-600 font-medium text-sm">
          <span
            className="material-symbols-outlined text-[#4299f0]"
            style={{ fontSize: 20 }}
          >
            calendar_month
          </span>
          <span>Next 24 Hours</span>
          <span
            className="material-symbols-outlined text-slate-400 group-hover:text-[#4299f0] transition-colors"
            style={{ fontSize: 20 }}
          >
            expand_more
          </span>
        </button>
      </div>

      {/* List Container */}
      <div className="flex flex-col gap-5 relative">
        {/* Timeline Line */}
        <div className="absolute left-[26px] top-6 bottom-6 w-[2px] border-l-2 border-dotted border-slate-300 z-0"></div>

        {/* Items Loop */}
        {items.map((item, idx) => (
          <div key={item.key || item.id || idx} className="relative z-10">
            <div
              className={cn(
                "flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#f3f4fa] rounded-xl neumorph-inset p-4 sm:p-5 border border-white/40",
                item.status === "scheduled" ? "opacity-70" : "",
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "flex shrink-0 items-center justify-center size-12 rounded-xl bg-[#f3f4fa] neumorph-btn",
                  item.status === "scheduled"
                    ? "text-slate-400"
                    : "text-slate-600",
                )}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
                <div className="flex flex-col justify-center">
                  <h3 className="text-slate-800 font-semibold text-base truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2 py-0.5 rounded-full border",
                        getStatusStyles(item.status),
                      )}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                    <span className="text-slate-500 text-sm">{item.time}</span>
                  </div>
                </div>
                {/* Meta */}
                <div className="flex items-center sm:justify-end gap-3">
                  {item.metaId && (
                    <span className="hidden sm:block text-slate-400 text-xs font-medium">
                      ID: {item.metaId}
                    </span>
                  )}
                  <button className="size-8 flex items-center justify-center rounded-full bg-[#f3f4fa] neumorph-btn hover:text-[#4299f0] transition-colors">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 20 }}
                    >
                      more_vert
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Marker */}
        {marker && (
          <div className="relative z-10 py-1 pl-[54px]">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#4299f0] ring-4 ring-[#f3f4fa]"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4299f0]">
                {marker.label}
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#4299f0]/30 to-transparent"></span>
              <span className="text-xs text-[#4299f0] font-medium">
                {marker.subLabel}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Alert */}
      {footerAlert && (
        <div className="mt-8 pt-6 border-t border-slate-200/60 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-amber-50/50 p-4 rounded-xl border border-amber-100/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-amber-100 text-amber-600 shrink-0">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <p className="text-slate-800 font-semibold text-sm">
                  {footerAlert.title}
                </p>
                <p className="text-slate-500 text-xs">{footerAlert.desc}</p>
              </div>
            </div>
            <button
              className="w-full md:w-auto px-6 py-2.5 bg-[#f3f4fa] rounded-full neumorph-btn active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-[#4299f0] hover:text-blue-600 font-bold text-sm tracking-wide"
              onClick={() => handleAction("FooterAction")}
            >
              <span className="material-symbols-outlined text-[18px]">
                bolt
              </span>
              {footerAlert.actionLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
