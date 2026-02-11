import { Highlighter } from "@/components/ui/highlighter";
import React from "react";
import { GoArrowRight, GoPeople } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { PiStudentLight } from "react-icons/pi";

export default function WhatStudentsGain() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 space-y-2.5">
      <header className="space-y-2.5 mb-6 max-w-3xl">
        <h2 className="md:text-3xl text-2xl font-medium mb-1">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            What students gain
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700">
          Join a thriving community designed to accelerate your entrepreneurial
          journey with networking, learning, and growth opportunities.
        </h3>
      </header>
      <section className="md:grid xl:grid-cols-3 md:grid-cols-2 xl:grid-rows-2 grid-rows-3 mb-4 flex flex-col m-auto gap-4">
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300 md:row-span-2 grid grid-rows-2">
          <header className="p-6">
            <div className="text-yellow-400 bg-yellow-100 outline outline-yellow-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-2">
              <GoPeople />
            </div>
            <h5 className="font-semibold tracking-wide md:text-2xl text-xl mb-1">
              Connect with entrepreneurs
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Meet other like-minded founders, share experiences, and build
              meaningful relationships that can lead to partnerships and
              collaborations.
            </p>
            <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
              <span>Learn more </span>
              <GoArrowRight className="inline-block" />
            </button>
          </header>
          <div className="ml-6 relative">
            <img
              src="/connectwithentrepreneurs.jpg"
              alt="Connect with entrepreneurs photo"
              className="absolute h-full right-0 object-cover rounded-tl-4xl drop-shadow-2xl drop-shadow-black/25"
            />
          </div>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300 xl:col-span-2 xl:row-span-1 md:row-span-2 grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-2">
          <header className="p-6">
            <div className="text-emerald-400 bg-emerald-100 outline outline-emerald-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-2">
              <RiCodeSSlashLine />
            </div>
            <h5 className="font-semibold tracking-wide md:text-2xl text-xl mb-1">
              Build real projects
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Access mentorship, resources, and guidance to level up your skills
              to navigate the challenges of building and scaling your startup.
            </p>
            <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
              <span>Learn more </span>
              <GoArrowRight className="inline-block" />
            </button>
          </header>
          <div className="ml-6 xl:mt-6 relative">
            <img
              src="/hunter-students-group-laptop-lg-768x432.jpg.optimal.jpg"
              alt="Build real projects photo"
              className="absolute h-full right-0 object-cover rounded-tl-4xl drop-shadow-2xl drop-shadow-black/25"
            />
          </div>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300">
          <header className="p-6">
            <div className="text-sky-400 bg-sky-100 outline outline-sky-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-2">
              <PiStudentLight />
            </div>
            <h5 className="font-semibold tracking-wide md:text-2xl text-xl mb-1">
              Student workshops
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Participate in hands-on workshops covering essential startup
              topics from product development to fundraising and marketing
              strategies.
            </p>
            <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
              <span>Learn more </span>
              <GoArrowRight className="inline-block" />
            </button>
          </header>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300">
          <header className="p-6">
            <div className="text-red-400 bg-red-100 outline outline-red-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-2">
              <RiCodeSSlashLine />
            </div>
            <h5 className="font-semibold tracking-wide md:text-2xl text-xl mb-1">
              Showcase your work
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Present your projects at demo days and pitch events. Get feedback from peers, connect with potential investors, and celebrate your wins with the community.
            </p>
            <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
              <span>Learn more </span>
              <GoArrowRight className="inline-block" />
            </button>
          </header>
        </div>
      </section>
    </div>
  );
}
