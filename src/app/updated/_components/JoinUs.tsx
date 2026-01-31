import React from "react";

export default function JoinUs() {
  return (
    <section
      className="m-8 md:p-12 p-8 rounded-2xl overflow-hidden relative"
      style={{
        backgroundImage: `linear-gradient(to top, #5f259f 0%, #9258d2 100%)`,
      }}
    >
      <div className="relative z-10">
        <header className="space-y-2 md:max-w-[60%]">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Join the Founders Club
          </h1>
          <p className="text-neutral-300 mb-4">
            Be apart of a thriving community of entrepreneurs and innovators.
            Learn from the best of the best from the industry and transform your
            ideas into a reality through our dedicated workshops, events and
            community.
          </p>
        </header>
        <button className="px-4 py-2 rounded-2xl bg-[#f0b100] font-bold cursor-pointer mb-4 hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out">
          Join today
        </button>
      </div>
      <img
        src="/team2.JPG"
        alt="Founders Team"
        className="absolute w-full h-full top-0 left-0 object-cover opacity-10 select-none pointer-events-none saturate-0 z-0"
      />
    </section>
  );
}
