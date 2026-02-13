import React from "react";

export default function Mission() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <img
        src="/about_mission_banner.JPG"
        alt="Mission Banner"
        className="rounded-2xl saturate-0 mb-4 xl:aspect-[10/2] md:aspect-[8/2] aspect-[6/2] object-cover"
      />
      <p className="font-light md:w-[70%] md:text-2xl text-xl italic">
        &quot;Hunter is full of people with big ideas and real talent they just
        need a room full of people who get it. That's what we built. A place
        where you can show up with nothing but a napkin sketch and leave with
        a team ready to make it happen.&quot;{" "}
        <span className="font-normal text-main">Samuel Michnik, Founder</span>
      </p>
    </div>
  );
}
