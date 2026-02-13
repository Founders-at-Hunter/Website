"use client";
import React from "react";
import events from "@/constants/events.json";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getPastEvents, getUpcomingEvents, hasDatePassed } from "@/constants";

export default function EventList({
  eventFilter,
}: {
  eventFilter: "upcoming" | "past" | "all";
}) {
  const filteredEvents = (() => {
    switch (eventFilter) {
      case "upcoming":
        return getUpcomingEvents();
      case "past":
        return getPastEvents();
      default:
        return events;
    }
  })();
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 flex flex-col gap-6">
      {filteredEvents.map((event, index) => (
        <section
          key={index}
          className="bg-neutral-100 rounded-2xl md:grid grid-cols-10 overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out"
        >
          <div className="xl:col-span-3 md:col-span-4 relative overflow-hidden">
            <img
              src={event.photo}
              alt={event.title}
              className="aspect-[4/2] object-cover w-full h-full"
            />
            <div
              className="absolute top-0 left-0 w-full h-full z-5"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              }}
            />
            <div className="flex flex-wrap gap-2 absolute bottom-4 left-4 z-10">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 backdrop-blur-xl outline outline-white/30 px-4 py-1.5 text-white font-light text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="p-6 xl:col-span-7 md:col-span-6 flex flex-col justify-between gap-4">
            <header>
              <h5 className="text-[hsl(44,100%,48%)] font-medium mb-1">
                {event.date
                  ? event.date.split(" ").slice(0, 2).join(" ") + " - "
                  : ""}
                {event.subtitle}
              </h5>
              <h3 className="text-2xl font-medium mb-2 tracking-wide">
                {event.title}
              </h3>
              <p className="text-neutral-700">{event.description}</p>
            </header>
            <div className="flex items-center justify-end gap-2">
              <Link
                className="text-main px-3 py-1.5 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out"
                href={`/events/${event.title}`}
              >
                Learn more
              </Link>
              <Link
                href={event.link}
                className={cn(
                  "bg-main text-white px-3 py-1.5 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out",
                  event.link === "" || hasDatePassed(event.date)
                    ? "pointer-events-none opacity-50"
                    : "",
                )}
                target="_blank"
              >
                {hasDatePassed(event.date) ? "Event passed" : "Join event"}
              </Link>
            </div>
          </aside>
        </section>
      ))}
    </div>
  );
}
