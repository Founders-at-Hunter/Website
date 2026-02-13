"use client";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { hasDatePassed } from "@/constants";

export default function EventAside({
  event,
}: {
  event: {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    room: string;
    time: string;
    photo: string;
    link: string;
    tags: string[];
    calendarLink: string;
  };
}) {
  const [link, setLink] = useState("Loading...");
  const selectedDate = useMemo(
    () => new Date(event.date || Date.now()),
    [event.date],
  );
  const [month, setMonth] = useState(selectedDate);

  const hasEventPassed = event.date ? hasDatePassed(event.date) : false;

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  useEffect(() => {
    setMonth(selectedDate);
  }, [selectedDate]);

  return (
    <aside className="xl:col-span-2 lg:col-span-3 sm:col-span-4 w-full p-2">
      <Calendar
        mode="single"
        className="rounded-lg w-full bg-white mb-2"
        selected={event.date ? selectedDate : undefined}
        onSelect={() => {}}
        month={month}
        onMonthChange={setMonth}
      />
      <ul className="mb-2 grid grid-cols-3 gap-2 items-stretch mt-auto">
        <li className="flex flex-col gap-0.5 px-4 py-2 bg-neutral-100 rounded-xl">
          <p className="text-xs font-light tracking-wider text-neutral-500">
            Date
          </p>
          <span className="font-bold text-xs">
            {event.date ? event.date.split(" ").slice(0, 2).join(" ") : "-"}
          </span>
        </li>
        <li className="flex flex-col gap-0.5 px-4 py-2 bg-neutral-100 rounded-xl">
          <p className="text-xs font-light tracking-wider text-neutral-500">
            Time
          </p>
          <span className="font-bold text-xs">
            {event.time ? event.time : "-"}
          </span>
        </li>
        <li className="flex flex-col gap-0.5 px-4 py-2 bg-neutral-100 rounded-xl">
          <p className="text-xs font-light tracking-wider text-neutral-500">
            Room
          </p>
          <span className="font-bold text-xs">
            {event.room ? event.room : "-"}
          </span>
        </li>
      </ul>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Link
          className={cn(
            `text-sm p-3 w-full rounded-xl text-main bg-main/10 block text-center hover:scale-103 transition-all duration-300 ease-in-out`,
            event.calendarLink === "" || hasEventPassed
              ? "pointer-events-none opacity-50"
              : "",
          )}
          href={event.calendarLink}
          target="_blank"
        >
          Add to calendar
        </Link>
        <Link
          className={cn(
            "text-sm p-3 w-full rounded-xl text-white bg-main block text-center hover:scale-103 transition-all duration-300 ease-in-out",
            event.link === "" || hasEventPassed
              ? "pointer-events-none opacity-50"
              : "",
          )}
          href={event.calendarLink}
          target="_blank"
        >
          {hasEventPassed ? "Event passed" : "Join Event"}
        </Link>
      </div>
      <label htmlFor="share-event" className="mb-2 block font-medium">
        Share this event
      </label>
      <div className="w-full py-2 px-3 outline -outline-offset-1 outline-neutral-200 rounded-md flex items-center gap-4 focus-within:outline-2 focus-within:-outline-offset-2">
        <input
          type="text"
          id="share-event"
          value={link}
          readOnly
          className="w-full outline-none border-none text-neutral-500 text-sm"
        />
        <button
          className="text-xs px-2 py-1 rounded-md bg-neutral-100 cursor-pointer"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            navigator.clipboard.writeText(link);
            const btn = e.currentTarget;
            const original = btn.textContent;

            btn.textContent = "Copied";

            setTimeout(() => {
              btn.textContent = original ?? "Copy";
            }, 1500);
          }}
        >
          Copy
        </button>
      </div>
      {/* Calendar, Past / Upcoming events, Share this event */}
    </aside>
  );
}
