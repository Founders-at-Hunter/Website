import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import events from "@/constants/events.json";
import { LuArrowUpRight, LuShare } from "react-icons/lu";
import EventAside from "./_components/EventAside";
import { getPastEvents, getUpcomingEvents, hasDatePassed } from "@/constants";

export default async function Event({
  params,
}: {
  params: Promise<{ eventTitle: string }>;
}) {
  const { eventTitle } = await params;
  const event = events.filter(
    (event) => decodeURIComponent(eventTitle) === event.title,
  )[0];

  if (!event) return null;

  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <Link
        href="/events"
        className="text-main items-center space-x-2 hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out mb-2 block w-fit"
      >
        <GoArrowLeft className="inline-block" />
        <span>All events</span>
      </Link>
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <img
          src={event.photo}
          alt={event.title}
          className="w-full xl:aspect-[10/2] md:aspect-[8/2] aspect-[6/2] object-cover"
        />
        {/* <div
          className="absolute top-0 left-0 w-full h-full z-5"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button className="rounded-full bg-white/20 backdrop-blur-sm outline outline-white/30 px-4 py-1.5 text-white font-light text-sm">
            <LuShare className="text-lg" />
          </button>
          <button className="rounded-full bg-white/20 backdrop-blur-sm outline outline-white/30 px-4 py-1.5 text-white font-light text-sm">
            <LuArrowUpRight className="text-lg" />
          </button>
        </div> */}
      </div>
      <div className="grid sm:grid-cols-10 gap-x-6 gap-y-4">
        <div className="xl:col-span-8 lg:col-span-7 sm:col-span-6 p-2">
          <header className="mb-2">
            <h5 className="text-[hsl(44,100%,48%)] font-medium mb-1 md:text-base text-sm">
              {event.subtitle}
            </h5>
            <h1 className="md:text-3xl text-2xl font-medium tracking-wide mb-1">
              {event.title}
            </h1>
            <p className="text-neutral-500 mb-4 md:text-base text-sm">
              {event.description}
            </p>
            {event.itinerary.length ? (
              <>
                <ul className="mb-4 text-neutral-500 flex flex-col gap-1 md:text-base text-sm">
                  {event.itinerary.map((itinerary, index) => (
                    <li key={index}>{itinerary}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <p className="text-neutral-500 md:text-base text-sm">
              ​Join our communities to keep up with future events here: <br />
              <Link
                href="https://linktr.ee/hunter.founders"
                className="text-main underline"
              >
                https://linktr.ee/hunter.founders
              </Link>
            </p>
          </header>
          <ul className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag, index) => (
              <li
                key={index}
                className="py-1.5 px-3 rounded-md bg-neutral-100 text-neutral-500 italic md:text-sm text-xs"
              >
                # {tag}
              </li>
            ))}
          </ul>
          <h5 className="font-medium mb-2">
            {hasDatePassed(event.date) ? "Upcoming events" : "Previous events"}
          </h5>
          <section className="flex items-center overflow-x-auto gap-2 mb-4 no-scrollbar">
            {(hasDatePassed(event.date)
              ? getUpcomingEvents()
              : getPastEvents()
            ).map((event, index) => (
              <Link
                key={index}
                className="w-full text-left p-3 rounded-2xl bg-neutral-100 flex items-center gap-3 shrink-0 max-w-xs"
                href={"/events/" + event.title}
              >
                <Image
                  src={event.photo}
                  alt={event.title}
                  width={56}
                  height={56}
                  className="aspect-square object-cover size-14 w-fit rounded-lg"
                />
                <header className="space-y-0.5">
                  <h5 className="text-neutral-700 font-medium text-sm">
                    {event.title}
                  </h5>
                  <p className="text-neutral-500 text-xs">{event.subtitle}</p>
                </header>
              </Link>
            ))}
          </section>
        </div>
        <EventAside event={event} />
      </div>
    </div>
  );
}
