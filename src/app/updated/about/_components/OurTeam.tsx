import { Highlighter } from "@/components/ui/highlighter";
import React from "react";

export default function OurTeam() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="space-y-2.5 mb-6">
        <h2 className="md:text-3xl text-2xl font-medium">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Meet the team
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700">See who is apart of the club</h3>
      </header>
      <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        <div className="rounded-2xl overflow-hidden relative hover:scale-103 transition-all duration-300 ease-in-out">
          <img
            src="/raychu.png"
            alt="Ray Chu"
            className="aspect-[2/3] object-cover brightness-125"
          />
          <div
            className="absolute size-full top-0 left-0 z-5"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute bottom-0 w-full md:p-6 p-4 z-10">
            <h5 className="text-white font-semibold text-xl tracking-wider mb-1">
              Ray Chu
            </h5>
            <p className="text-sm text-neutral-200 mb-4 font-light">
              👋 Hello, I am a freshman studying CS as a Daedalus Scholar. I
              also made this website.
            </p>
            <div className="flex justify-between items-center gap-2">
              <h4 className="text-neutral-100 text-sm font-semibold tracking-wide uppercase">
                Tech Lead
              </h4>
              <button className="bg-white py-2 px-4 rounded-full text-sm">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
