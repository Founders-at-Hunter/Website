import React from "react";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="h-[100dvh] bg-main relative">
      <header className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-2xl w-full m-auto px-10 z-2">
        <p className="font-bold text-white/40 text-center">
          FOUNDERS @ HUNTER COLLEGE
        </p>
        <h1 className="font-black text-4xl text-center text-white mb-2">
          Sed ut Perspiciatis Unde Omnis Doloremque Laudantium.
        </h1>
        <p className="text-sm text-center text-white/60 w-4/5 m-auto mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit
          amet, consectetur adipiscing elit psum dolor sit a.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button className="text-sm outline outline-white -outline-offset-1 text-white py-2 px-4 rounded-full cursor-pointer transition-all duration-300">
            Learn more
          </button>
          <button className="text-sm bg-white hover:bg-white/80 active:bg-white/80 py-2 px-4 rounded-full text-main cursor-pointer transition-all duration-300">
            Register
          </button>
        </div>
      </header>
      <HeroImages />
    </section>
  );
}
