import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import {
  getPastEvents,
  getUpcomingEvents,
  hasDatePassed,
} from "@/constants/index";

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
          {getUpcomingEvents().length} upcoming event
          {getUpcomingEvents().length !== 1 ? "s" : " "}
          <span className="ml-1.5">🍎</span>
        </h6>
        <h2 className="md:text-3xl text-2xl font-medium mb-1 text-center">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            {getUpcomingEvents().length === 0
              ? "Our previous events"
              : "Our upcoming events"}
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700 text-center md:text-base text-sm">
          Join us for an exciting lineup of events designed to help you grow as
          an entrepreneur.
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {(getUpcomingEvents().length === 0
          ? getPastEvents().reverse()
          : getUpcomingEvents()
        ).map((event, index) => {
          const hasEventPassed = event.date ? hasDatePassed(event.date) : false;
          return (
            <div
              className="flex flex-col rounded-2xl overflow-hidden relative p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out"
              key={index}
            >
              <header className="flex items-center gap-4 mb-3">
                <Image
                  src={event.photo}
                  alt={`${event.title} event`}
                  width={80}
                  height={80}
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
              <p className="text-neutral-500 mb-4 md:text-base text-sm line-clamp-3">
                {event.description}
              </p>
              <ul className="mb-2 grid grid-cols-3 gap-2 items-stretch mt-auto">
                <li className="flex flex-col gap-0.5 bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-xs font-light tracking-wider text-neutral-500">
                    Date
                  </p>
                  <span className="font-bold text-xs">
                    {event.date
                      ? event.date.split(" ").slice(0, 2).join(" ")
                      : "-"}
                  </span>
                </li>
                <li className="flex flex-col gap-0.5 bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-xs font-light tracking-wider text-neutral-500">
                    Time
                  </p>
                  <span className="font-bold text-xs">
                    {event.time ? event.time : "-"}
                  </span>
                </li>
                <li className="flex flex-col gap-0.5 bg-white px-4 py-2 border-b border-main rounded-xl">
                  <p className="text-xs font-light tracking-wider text-neutral-500">
                    Room
                  </p>
                  <span className="font-bold text-xs">
                    {event.room ? event.room : "-"}
                  </span>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  className={cn(
                    "bg-main/10 w-full px-4 py-3 rounded-xl text-main block text-center hover:scale-105 transition-all duration-300 ease-in-out hover:brightness-110 md:text-base text-sm",
                  )}
                  href={`/events/${event.title}`}
                  target="_blank"
                >
                  Learn more
                </Link>
                <Link
                  className={cn(
                    "bg-main w-full px-4 py-3 rounded-xl text-white block text-center hover:scale-105 transition-all duration-300 ease-in-out hover:brightness-110 md:text-base text-sm",
                    hasEventPassed || event.link === ""
                      ? "pointer-events-none opacity-50"
                      : "",
                  )}
                  href={event.link}
                  target="_blank"
                >
                  {hasEventPassed ? "Event passed" : "Join Event"}
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
