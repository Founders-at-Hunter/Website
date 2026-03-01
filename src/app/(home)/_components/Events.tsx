import Link from "next/link";
import React from "react";
import { hasDatePassed } from "@/constants/index";
import events from "@/constants/events.json";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

export default function Events() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 scroll-mt-24" id="events">
      <header className="space-y-2.5 mb-6">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] outline-1 -outline-offset-1 outline-[#FFC72A]/15 w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          Featured Events
        </h6>
        <h2 className="text-3xl font-medium mb-2">
          Explore the latest from us
        </h2>
        <h3 className="text-neutral-700 md:text-lg text-base">
          Our events are designed to help you grow as an entrepreneur.
        </h3>
      </header>
      <section className="grid lg:grid-cols-2 grid-rows-2 md:gap-6 gap-4">
        <RecentEvent />
        <OtherEvents />
      </section>
    </div>
  );
}

function RecentEvent() {
  const latestEvent = events[events.length - 1];
  const eventPassed = hasDatePassed(latestEvent.date);
  return (
    <aside className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl hover:scale-101 transition-all ease-in-out duration-300">
      <img
        src={latestEvent.photo}
        alt={latestEvent.title}
        className="aspect-video object-cover size-full"
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      />
      <p className="bg-white px-3 py-1.5 rounded-full text-xs font-medium absolute md:top-8 md:right-8 top-6 right-6 z-10">
        {eventPassed ? "Recent" : "Upcoming"}
      </p>
      <header className="absolute md:bottom-8 bottom-6 md:px-8 px-6 z-10 flex justify-between items-end w-full">
        <div>
          <h6 className="tracking-wider text-[#FFC72A] mb-2 md:text-base text-sm">
            {latestEvent.subtitle}
          </h6>
          <h2 className="md:text-3xl text-2xl text-white">
            {latestEvent.title}
          </h2>
        </div>
        <Link
          className="text-white flex items-center gap-2 cursor-pointer md:text-base text-sm w-fit"
          href={`/events/${latestEvent.title}`}
          target="_blank"
        >
          <span>Learn more </span>
          <GoArrowRight className="inline-block" />
        </Link>
      </header>
    </aside>
  );
}

function OtherEvents() {
  const otherEvents = [...events].reverse().slice(1, 3);
  return otherEvents.map((event, index) => (
    <aside
      key={index}
      className="col-span-1 row-span-1 grid grid-cols-2 md:gap-6 gap-4 hover:scale-101 transition-all ease-in-out duration-300"
    >
      <Link
        className="relative group overflow-hidden rounded-2xl"
        href={`/events/${event.title}`}
        target="_blank"
      >
        <img
          src={event.photo}
          alt={event.title}
          className="aspect-video object-cover size-full relative z-0 group-hover:brightness-50 transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <GoArrowUpRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white z-10 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out" />
      </Link>
      <div className="flex flex-col justify-between py-4 gap-4">
        <header>
          <h6 className="tracking-wider text-[#FFC72A] mb-2 text-sm">
            {event.subtitle}
          </h6>
          <h2 className="md:text-2xl text-xl mb-2">{event.title}</h2>
          <p className="text-neutral-500 line-clamp-2">{event.description}</p>
        </header>
        <Link
          className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm w-fit"
          href={`/events/${event.title}`}
          target="_blank"
        >
          <span>Learn more </span>
          <GoArrowRight className="inline-block" />
        </Link>
      </div>
    </aside>
  ));
}
