import { Highlighter } from "@/components/ui/highlighter";
import React from "react";
import { FaGraduationCap, FaHandsHelping, FaUserFriends } from "react-icons/fa";

export default function WhatStudentsGain() {
  return (
    <div className="p-8 space-y-2.5">
      <header className="space-y-2.5 mb-6">
        <h2 className="text-3xl font-medium">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            What students gain
          </Highlighter>
        </h2>
        <h3 className="text-lg text-neutral-700">
          Join a thriving community designed to accelerate your entrepreneurial
          journey with networking, learning, and growth opportunities.
        </h3>
      </header>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mb-4">
        <div className="relative rounded-2xl overflow-hidden group hover:scale-103 transition-all duration-300">
          <img
            src="/DSC00878.JPG"
            alt="Meet Other Entrepreneurs Photo"
            className="transition-all duration-300 ease-in-out aspect-[6/3] object-cover "
          />
          <header className="bg-neutral-100 p-6">
            <h5 className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-500 text-2xl size-10 flex items-center justify-center font-black rounded-md">
                <FaUserFriends />
              </div>
              <span className="font-bold text-lg">
                Meet Other Entrepreneurs
              </span>
            </h5>
            <p className="text-neutral-700">
              Connect with like-minded founders, share experiences, and build
              meaningful relationships that can lead to partnerships and
              collaborations.
            </p>
          </header>
        </div>
        <div className="relative rounded-2xl overflow-hidden group hover:scale-103 transition-all duration-300">
          <img
            src="/DSC00840.JPG"
            alt="Career Development Photo"
            className="transition-all duration-300 ease-in-out aspect-[6/3] object-cover "
          />
          <header className="bg-neutral-100 p-6">
            <h5 className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-500 text-2xl size-10 flex items-center justify-center font-black rounded-md">
                <FaGraduationCap />
              </div>
              <span className="font-bold text-lg">Career Development</span>
            </h5>
            <p className="text-neutral-700">
              Access mentorship, resources, and guidance to level up your skills
              and navigate the challenges of building and scaling your startup.
            </p>
          </header>
        </div>
        <div className="relative rounded-2xl overflow-hidden group hover:scale-103 transition-all duration-300">
          <img
            src="/DSC00774.JPG"
            alt="Student Workshops Photo"
            className="transition-all duration-300 ease-in-out aspect-[6/3] object-cover "
          />
          <header className="bg-neutral-100 p-6">
            <h5 className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-500 text-2xl size-10 flex items-center justify-center font-black rounded-md">
                <FaHandsHelping />
              </div>
              <span className="font-bold text-lg">Student Workshops</span>
            </h5>
            <p className="text-neutral-700">
              Participate in hands-on workshops covering essential startup
              topics from product development to fundraising and marketing
              strategies.
            </p>
          </header>
        </div>
      </section>
    </div>
  );
}
