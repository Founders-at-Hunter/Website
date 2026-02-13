import { cn } from "@/lib/utils";
import React from "react";

export default function EventHeader({
  eventFilter,
  setEventFilter,
}: {
  eventFilter: "upcoming" | "past" | "all";
  setEventFilter: React.Dispatch<
    React.SetStateAction<"upcoming" | "past" | "all">
  >;
}) {
  return (
    <header className="md:px-8 md:pt-6 pt-4 px-4">
      <h1 className="md:text-3xl text-2xl font-medium md:mb-3 mb-2">
        Our Events
      </h1>
      <div className="flex flex-col gap-2">
        <aside className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {["upcoming", "past", "all"].map((filter, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-1.5 rounded-full outline text-sm cursor-pointer transition-all duration-300 ease-in-out",
                filter === eventFilter
                  ? "bg-purple-100 outline-main/25 text-main"
                  : "bg-neutral-100 outline-neutral-300 text-neutral-500",
              )}
              onClick={() => setEventFilter(filter as typeof eventFilter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase()}
            </button>
          ))}
        </aside>
      </div>
    </header>
  );
}
