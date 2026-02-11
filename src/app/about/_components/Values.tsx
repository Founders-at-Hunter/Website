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
        <h2 className="md:text-3xl text-2xl font-medium mb-1">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Our values
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700 md:text-base text-sm">
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
          <GoPeople className="md:text-7xl text-6xl text-red-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium md:text-xl text-lg mb-0.5 text-white">
            Collaboration
          </h5>
          <p className="text-white font-light md:text-base text-sm">
            We believe the best projects happen when diverse talents collide. Connect with students across majors to find your technical cofounder, marketing genius, or design partner. At Founders, collaboration is more than networking it's about building something together that none of us could create alone.
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-amber-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #fbbf24 0%, #fcd34d 100%)",
          }}
        >
          <LiaHandshakeSolid className="md:text-7xl text-6xl text-amber-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium md:text-xl text-lg mb-0.5 text-white">
            Equity
          </h5>
          <p className="text-white font-light md:text-base text-sm">
            Everyone deserves a seat at the table. We're committed to making entrepreneurship accessible to all Hunter students, regardless of major, background, or experience level. Whether you're a first time builder or a seasoned hacker, Founders provides the resources, mentorship, and community support to help you succeed on your own terms.
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-emerald-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #34d399 0%, #6ee7b7 100%)",
          }}
        >
          <IoShieldCheckmarkOutline className="md:text-7xl text-6xl text-emerald-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium md:text-xl text-lg mb-0.5 text-white">
            Integrity
          </h5>
          <p className="text-white font-light md:text-base text-sm">
            We build with honesty and transparency at our core. From the products we create to the relationships we foster, integrity guides every decision. We support each other with genuine feedback, celebrate authentic wins, and believe that the best startups are built on trust and ethical innovation.
          </p>
        </div>
        <div
          className="rounded-2xl overflow-hidden relative p-6 bg-sky-400 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5"
          style={{
            backgroundImage:
              "linear-gradient(to top, #22d3ee 0%, #7dd3fc 100%)",
          }}
        >
          <MdLightbulbOutline className="md:text-7xl text-6xl text-sky-400 p-4 rounded-2xl bg-white block" />
          <h5 className="font-medium md:text-xl text-lg mb-0.5 text-white">
            Innovation
          </h5>
          <p className="text-white font-light md:text-base text-sm">
            We embrace the spirit of experimentation and creative problem solving. From launching new products to exploring unconventional career paths, innovation is about challenging the status quo and learning by doing. At Founders, we encourage bold ideas, celebrate failures as learning opportunities, and push each other to think beyond traditional boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}
