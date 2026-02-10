import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import events from "@/constants/events.json";
import { Calendar } from "@/components/ui/calendar";
import { LuArrowUpRight, LuShare } from "react-icons/lu";

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
      <div className="relative">
        <img
          src={event.photo}
          alt={event.title}
          className="w-full xl:aspect-[10/2] md:aspect-[8/2] aspect-[6/2] object-cover rounded-2xl mb-3"
        />
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button className="bg-white outline outline-neutral-200 text-neutral-700 rounded-xl px-3 py-1.5 text-sm cursor-pointer">
            <LuShare className="text-lg" />
          </button>
          <button className="bg-white outline outline-neutral-200 text-neutral-700 rounded-xl px-3 py-1.5 text-sm cursor-pointer">
            <LuArrowUpRight className="text-lg" />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-10 gap-x-6 gap-y-4">
        <div className="xl:col-span-8 md:col-span-7">
          <header>
            <h5 className="text-[hsl(44,100%,48%)] font-medium">
              {event.subtitle}
            </h5>
            <h1 className="md:text-3xl text-2xl font-medium tracking-wide mb-2">
              {event.title}
            </h1>
            <p className="text-neutral-700 text-lg">{event.description}</p>
          </header>
          <ul className="flex flex-col gap-1">
            <li>
              Date:{" "}
              <span className="font-bold tracking-wide ml-2">{event.date}</span>
            </li>
            <li>
              Time:{" "}
              <span className="font-bold tracking-wide ml-2">{event.time}</span>
            </li>
            <li>
              Room:{" "}
              <span className="font-bold tracking-wide ml-2">{event.room}</span>
            </li>
          </ul>
        </div>
        <aside className="xl:col-span-2 md:col-span-3 w-full">
          {JSON.stringify(
            new Date(`${event.date}, ${new Date().getFullYear()}`),
          )}
          <Calendar
            mode="single"
            className="rounded-lg w-full outline outline-neutral-200 bg-white drop-shadow-xs"
            selected={new Date()}
          />
          {/* Calendar, Past / Upcoming events, Share this event */}
        </aside>
      </div>
    </div>
  );
}
