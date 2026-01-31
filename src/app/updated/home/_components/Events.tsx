import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import React from "react";
import events from "@/constants/events.json";
import { cn } from "@/lib/utils";

export default function Events() {
  return (
    <div className="p-8">
      <header className="space-y-2.5 mb-6">
        <h4
          className="w-fit text-white rounded-full px-4 py-1.5 font-light drop-shadow-2xl drop-shadow-main/30 text-sm mb-1 m-auto"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%);",
          }}
        >
          4 upcoming events <span className="ml-1.5">🍎</span>
        </h4>
        <h2 className="text-3xl font-medium text-center">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Our upcoming events
          </Highlighter>
        </h2>
        <h3 className="text-lg text-neutral-700 text-center">
          Join us for an exciting lineup of events designed to help you grow as
          an entrepreneur.
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {events.map((event, index) => {
          const isPast = hasDatePassed(event.date);
          return (
            <div
              className="rounded-2xl overflow-hidden relative p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out"
              key={index}
            >
              <header className="flex items-center gap-4 mb-3">
                <img
                  src={event.photo}
                  alt={`${event.title} event`}
                  className="object-cover aspect-square size-20 rounded-2xl"
                />
                <aside>
                  <h5 className="font-semibold text-xl mb-0.5">
                    {event.title}
                  </h5>
                  <p className="text-sm text-neutral-500">{event.subtitle}</p>
                </aside>
              </header>
              <p className="text-neutral-700 mb-4">{event.description}</p>
              <ul className="mb-4 grid grid-cols-3 gap-2 items-stretch">
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-2xl">
                  <p className="text-sm font-light tracking-wider">Date</p>
                  <span className="font-bold">
                    {isPast ? "Event passed" : event.date}
                  </span>
                </li>
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-2xl">
                  <p className="text-sm font-light tracking-wider">Time</p>
                  <span className="font-bold">
                    {isPast ? "Event passed" : event.time}
                  </span>
                </li>
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-2xl">
                  <p className="text-sm font-light tracking-wider">Room</p>
                  <span className="font-bold">
                    {isPast ? "Event passed" : event.room}
                  </span>
                </li>
              </ul>
              <div className={cn("", isPast ? "hidden" : "")}>
                <Link
                  className={cn(
                    "bg-white w-full px-4 py-3 rounded-2xl text-main block text-center hover:scale-105 transition-all duration-300 ease-in-out hover:brightness-110",
                    event.link ? "" : "pointer-events-none opacity-50",
                  )}
                  href={event.link}
                >
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function hasDatePassed(dateStr: string) {
  const now = new Date();
  const year = now.getFullYear();

  const date = new Date(`${dateStr}, ${year}`);

  // Normalize both to midnight so time of day doesn’t matter
  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  return date < now;
}
