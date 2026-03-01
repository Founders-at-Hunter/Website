import { cn } from "@/lib/utils";
import React from "react";

export default function EventHeader() {
  return (
    <header className="md:px-8 md:pt-6 pt-4 px-4">
      <h6 className="uppercase tracking-widest text-comp brightness-95 text-sm font-semibold mb-2">
        Our events
      </h6>
      <h1 className="md:text-3xl text-2xl font-medium md:mb-3 mb-2">
        Explore our events
      </h1>
    </header>
  );
}
