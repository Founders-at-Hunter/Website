import Image from "next/image";
import React from "react";
import { GoArrowRight, GoPeople } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { PiStudentLight } from "react-icons/pi";
import { TbDeviceDesktopShare } from "react-icons/tb";

export default function WhatStudentsGain() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 space-y-2.5">
      <header className="space-y-2.5 mb-6 max-w-3xl">
        <h6 className="bg-[#FFC72A]/10 text-[#FFC72A] outline-1 -outline-offset-1 outline-[#FFC72A]/15 w-fit rounded-full px-4 py-1.5 font-light md:text-sm text-xs mb-4 tracking-wide shadow-xs shadow-[#FFC72A]/60">
          What students gain
        </h6>
        <h2 className="md:text-4xl text-3xl font-medium mb-4">
          Our community impact
        </h2>
        <h3 className="text-neutral-700">
          Accelerate your entrepreneurial journey with networking, learning, and
          growth opportunities.
        </h3>
      </header>
      <section className="md:grid xl:grid-cols-3 md:grid-cols-2 xl:grid-rows-2 grid-rows-3 mb-4 flex flex-col m-auto gap-6">
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300 md:row-span-2 grid grid-rows-2">
          <header className="md:p-8 p-6">
            <div className="text-indigo-400 bg-indigo-100 outline outline-indigo-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <GoPeople />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-3">
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
            <Image
              src="/connectwithentrepreneurs.jpg"
              alt="Connect with entrepreneurs photo"
              width={600}
              height={400}
              className="absolute h-full right-0 object-cover rounded-tl-2xl drop-shadow-2xl drop-shadow-black/25"
            />
          </div>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300 xl:col-span-2 xl:row-span-1 md:row-span-2 grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-2">
          <header className="md:p-8 p-6">
            <div className="text-emerald-400 bg-emerald-100 outline outline-emerald-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <RiCodeSSlashLine />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-3">
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
          <div className="lg:mx-6 ml-6 xl:mt-6 relative">
            <Image
              src="/hunter-students-group-laptop-lg-768x432.jpg.optimal.jpg"
              alt="Build real projects photo"
              width={768}
              height={432}
              className="absolute h-full right-0 object-cover lg:rounded-t-2xl rounded-tl-2xl drop-shadow-2xl drop-shadow-black/25"
            />
          </div>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300">
          <header className="md:p-8 p-6">
            <div className="text-amber-400 bg-amber-100 outline outline-amber-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <PiStudentLight />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-3">
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
          <header className="md:p-8 p-6">
            <div className="text-red-400 bg-red-100 outline outline-red-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <TbDeviceDesktopShare />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-3">
              Present your work
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Share to the world your projects, ideas, and goals. Hear back from
              peers, connect with investors, and celebrate your wins with us.
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
