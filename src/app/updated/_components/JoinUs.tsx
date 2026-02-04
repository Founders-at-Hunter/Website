import React from "react";

export default function JoinUs() {
  return (
    <section
      className="md:m-8 m-6 md:p-12 p-8 rounded-xl overflow-hidden relative"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(146,88,210,0.5) 0%, rgba(146,88,210,0.05) 100%)`,
      }}
    >
      <div className="relative z-10 md:space-y-4 space-y-3 text-center max-w-2xl m-auto">
        <h1 className="md:text-3xl text-2xl tracking-wide">
          Be part of the Founders Club
        </h1>
        <p className="text-neutral-700 font-light">
          Connect with like-minded founders, learn from industry leaders, and
          turn your ideas into reality through our workshops, events, and
          community.
        </p>
        <button className="px-4 py-2 rounded-2xl bg-white cursor-pointer mb-4 hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out text-[#9258D2]">
          Join now
        </button>
      </div>
      {/* <img
        src="/team2.JPG"
        alt="Founders Team"
        className="absolute w-full h-full top-0 left-0 object-cover opacity-10 select-none pointer-events-none saturate-0 z-0"
      /> */}
    </section>
  );
}
