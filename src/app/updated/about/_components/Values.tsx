import { Highlighter } from "@/components/ui/highlighter";
import React from "react";
import { GoPeople } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaHandshakeSolid } from "react-icons/lia";
import { MdLightbulbOutline } from "react-icons/md";

export default function Values() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="space-y-2.5 mb-6">
        <h2 className="md:text-3xl text-2xl font-medium">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Our values
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700">
          Learn about what we as a club value the most.
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-red-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #f87171 0%, #fca5a5 100%)",
          }}
        >
          <GoPeople className="text-7xl text-red-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium text-xl mb-0.5 text-white">
            Collaboration
          </h5>
          <p className="text-white font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            voluptatum eius quas ducimus culpa error architecto facere
            asperiores exercitationem, repellendus a reprehenderit molestias
            pariatur!
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-amber-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #fbbf24 0%, #fcd34d 100%)",
          }}
        >
          <LiaHandshakeSolid className="text-7xl text-amber-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium text-xl mb-0.5 text-white">Equity</h5>
          <p className="text-white font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            voluptatum eius quas ducimus culpa error architecto facere
            asperiores exercitationem, repellendus a reprehenderit molestias
            pariatur!
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-emerald-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #34d399 0%, #6ee7b7 100%)",
          }}
        >
          <IoShieldCheckmarkOutline className="text-7xl text-emerald-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium text-xl mb-0.5 text-white">Integrity</h5>
          <p className="text-white font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            voluptatum eius quas ducimus culpa error architecto facere
            asperiores exercitationem, repellendus a reprehenderit molestias
            pariatur!
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-sky-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #22d3ee 0%, #7dd3fc 100%)",
          }}
        >
          <MdLightbulbOutline className="text-7xl text-sky-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium text-xl mb-0.5 text-white">Innovation</h5>
          <p className="text-white font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            voluptatum eius quas ducimus culpa error architecto facere
            asperiores exercitationem, repellendus a reprehenderit molestias
            pariatur!
          </p>
        </div>
      </section>
    </div>
  );
}
