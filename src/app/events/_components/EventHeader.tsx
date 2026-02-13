import React from "react";

export default function EventHeader() {
  return (
    <header className="md:px-8 px-6 md:py-6 py-4">
      <h1 className="md:text-3xl text-2xl tracking-wide font-medium md:mb-3 mb-2">
        Our Events
      </h1>
      {/* <div className="flex flex-col gap-2">
        <input
          type="text"
          className="w-full bg-neutral-100 px-4 py-2 rounded-full"
          placeholder="Search events"
        />
        <aside className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {["newest", "past", "all"].map((filter, index) => (
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
      </div> */}
    </header>
  );
}
