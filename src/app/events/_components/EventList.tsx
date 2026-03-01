"use client";
import React, { useState } from "react";
import events from "@/constants/events.json";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { HiHashtag } from "react-icons/hi";
import { getPopularTags, getUpcomingEvents, hasDatePassed } from "@/constants";

export default function EventList() {
  const [featuredEvents, setFeaturedEvents] = useState(events.reverse());
  const popularTags = getPopularTags();
  return (
    <div className="md:grid flex flex-col grid-cols-10 md:px-8 px-6 md:py-6 py-4 md:gap-6 gap-4 relative">
      <aside className="2xl:col-span-8 col-span-7 grid sm:grid-cols-2 md:gap-6 gap-4">
        {featuredEvents.map((event, index) => (
          <Link
            key={index}
            href={`/events/${event.title}`}
            className="hover:scale-101 transition-all duration-300 ease-in-out"
          >
            <div className="mb-2 rounded-2xl relative group overflow-hidden">
              <img
                src={event.photo}
                alt={event.title}
                className="aspect-video object-cover size-full z-0 group-hover:brightness-50 transition-all duration-300 ease-in-out group-hover:scale-105"
              />
              <p className="bg-white px-3 py-1.5 rounded-full text-xs font-medium absolute top-6 right-6 z-10">
                {hasDatePassed(event.date) ? "Event passed" : "Upcoming"}
              </p>
              <GoArrowUpRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white z-10 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out" />
            </div>
            <header className="p-2">
              <h2 className="md:text-2xl text-xl text-neutral-700 mb-2 font-medium">
                {event.title}
              </h2>
              <p className="text-neutral-500 md:text-base text-sm line-clamp-2">
                {event.description}
              </p>
            </header>
          </Link>
        ))}
      </aside>
      <aside className="2xl:col-span-2 col-span-3 flex flex-col gap-6 sticky top-0 w-full">
        <div className="p-6 rounded-2xl bg-neutral-100">
          <p className="mb-8 text-sm text-neutral-700 tracking-wider font-medium">
            Upcoming events:
          </p>
          <h2 className="text-5xl font-black text-comp">
            {getUpcomingEvents().length}
          </h2>
        </div>
        <div className="p-6 rounded-2xl bg-neutral-100">
          <p className="mb-8 text-sm text-neutral-700 tracking-wider font-medium">
            Total events:
          </p>
          <h2 className="text-5xl font-black text-main">
            {featuredEvents.length}
          </h2>
        </div>
        <div>
          <h6 className="mb-2 font-medium text-neutral-700">Most popular</h6>
          <hr className="text-neutral-200 mb-4" />
          <ul className="space-y-4">
            {popularTags.map((tag, index) => (
              <li className="text-neutral-700 space-x-3 w-full" key={index}>
                <span className="p-1 rounded-md bg-neutral-100">
                  <HiHashtag className="inline-block" />
                </span>
                <span className="text-sm">{tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
