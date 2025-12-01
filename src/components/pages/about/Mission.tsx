import React from "react";

export default function Mission() {
  return (
    <section className="flex flex-col gap-2 p-4">
      <img
        src="/about_mission_banner.JPG"
        alt="Mission Banner"
        className="rounded-md saturate-0"
      />
      <h6 className="font-semibold uppercase text-xs text-black/40 mt-1">
        Our mission
      </h6>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
        <h2 className="italic font-light text-2xl">
          &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptas soluta assumenda at ab veritatis placeat.&quot;
        </h2>
        <p className="text-black/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit
          nostrum omnis odit a incidunt voluptatem, ratione necessitatibus vel,
          voluptate commodi eveniet velit ex dolor aliquam dicta, cumque magnam
          numquam?
        </p>
      </div>
    </section>
  );
}
