import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import React from "react";
import events from "@/constants/events.json";
import { cn } from "@/lib/utils";

export default function Events() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="space-y-2.5 mb-6 max-w-xl m-auto">
        <h6
          className="bg-main w-fit text-white rounded-full px-4 py-1.5 font-light md:text-sm text-xs mb-1 m-auto"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
          }}
        >
          4 upcoming events <span className="ml-1.5">🍎</span>
        </h6>
        <h2 className="md:text-3xl text-2xl font-medium mb-1 text-center">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Our upcoming events
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700 text-center md:text-base text-sm">
          Join us for an exciting lineup of events designed to help you grow as
          an entrepreneur.
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {events.map((event, index) => {
          const isPast = hasDatePassed(event.date);
          if (isPast) return null;
          return (
            <div
              className="flex flex-col rounded-2xl overflow-hidden relative p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out"
              key={index}
            >
              <header className="flex items-center gap-4 mb-3">
                <img
                  src={event.photo}
                  alt={`${event.title} event`}
                  className="object-cover aspect-square md:size-20 size-18 rounded-2xl"
                />
                <aside>
                  <h5 className="font-semibold md:text-xl text-lg mb-0.5">
                    {event.title}
                  </h5>
                  <p className="text-sm text-[hsl(44,100%,48%)] font-medium tracking-wider">
                    {event.subtitle}
                  </p>
                </aside>
              </header>
              <p className="text-neutral-500 mb-6 md:text-base text-sm">
                {event.description}
              </p>
              <ul className="mb-2 grid grid-cols-3 gap-2 items-stretch mt-auto">
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-sm font-light tracking-wider text-neutral-600">
                    Date
                  </p>
                  <span className="font-bold text-sm">{event.date}</span>
                </li>
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-sm font-light tracking-wider text-neutral-600">
                    Time
                  </p>
                  <span className="font-bold text-sm">{event.time}</span>
                </li>
                <li className="flex flex-col bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-sm font-light tracking-wider text-neutral-600">
                    Room
                  </p>
                  <span className="font-bold text-sm">{event.room}</span>
                </li>
              </ul>
              <Link
                className={cn(
                  "bg-main/7.5 w-full px-4 py-3 rounded-xl text-main block text-center hover:scale-105 transition-all duration-300 ease-in-out hover:brightness-110 md:text-base text-sm",
                  event.link ? "" : "pointer-events-none opacity-50",
                )}
                href={event.link}
                target="_blank"
              >
                Learn more
              </Link>
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
