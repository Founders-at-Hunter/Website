import type { Metadata } from "next";
import React from "react";
import EventHeader from "./_components/EventHeader";
import EventList from "./_components/EventList";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming and past events from Founders @ Hunter — workshops, networking nights, open mics, and more at Hunter College.",
};

export default function Events() {
  return (
    <div>
      <EventHeader />
      <EventList />
    </div>
  );
}
