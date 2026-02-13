"use client";
import React, { useState } from "react";
import EventHeader from "./_components/EventHeader";
import EventList from "./_components/EventList";

export default function Events() {
  const [eventFilter, setEventFilter] = useState<"upcoming" | "past" | "all">(
    "upcoming",
  );
  return (
    <div>
      <EventHeader eventFilter={eventFilter} setEventFilter={setEventFilter} />
      <EventList eventFilter={eventFilter} />
    </div>
  );
}
