import Image from "next/image";
import React from "react";
import { GoArrowRight, GoPeople } from "react-icons/go";
import { RiCodeSSlashLine } from "react-icons/ri";
import { PiStudentLight } from "react-icons/pi";
import { TbDeviceDesktopShare } from "react-icons/tb";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function WhatStudentsGain() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 space-y-2.5">
      <header className="space-y-2.5 mb-6 max-w-3xl">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] outline-1 -outline-offset-1 outline-[#FFC72A]/15 w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          What students gain
        </h6>
        <h2 className="text-3xl font-medium mb-2">Our student impact</h2>
        <h3 className="text-neutral-700 md:text-lg text-base">
          Accelerate your entrepreneurial journey with networking, learning, and
          growth opportunities.
        </h3>
      </header>
      <section className="md:grid xl:grid-cols-3 md:grid-cols-2 xl:grid-rows-2 grid-rows-3 mb-4 flex flex-col m-auto gap-6">
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300 md:row-span-2 grid grid-rows-2">
          <header className="md:p-8 p-6">
            <div className="text-blue-400 bg-blue-100 outline outline-blue-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <GoPeople />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-2">
              Connect with entrepreneurs
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Meet other like-minded founders, share experiences, and build
              meaningful relationships that can lead to partnerships and
              collaborations.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
                  <span>Learn more </span>
                  <GoArrowRight className="inline-block" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-medium text-xl leading-4 mb-2  ">
                    Connect with entrepreneurs
                  </DialogTitle>
                  <DialogDescription className="font-normal text-neutral-700">
                    Learn how our club empowers students to connect with
                    entrepreneurs
                  </DialogDescription>
                </DialogHeader>
                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 space-y-4 relative text-neutral-500">
                  <p className="text-sm">
                    At the Founders Club @ Hunter, students don’t just hear
                    about entrepreneurship, they meet the people actually living
                    it. Founders come in and share what it’s really like to
                    start something from nothing, including the wins, the
                    setbacks, and the lessons they learned the hard way. The
                    conversations are open and honest, whether it’s during a
                    guest talk, a Q&A, or a small group discussion. Students
                    walk away with a clearer, more realistic sense of what
                    building a company actually involves.
                  </p>
                  <p className="text-sm">
                    Just as important, the club makes it easy to form real
                    relationships. At networking nights, roundtables, and casual
                    coffee chats, students can talk directly with founders
                    across different industries. These aren’t rushed exchanges.
                    They’re genuine conversations that often lead to mentorship,
                    internships, or even collaborations. Because the environment
                    is relaxed and welcoming, students feel comfortable asking
                    thoughtful questions, sharing their own ideas, and getting
                    feedback from people who remember what it was like to be in
                    their position.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out text-sm">
                      Close
                    </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
            <h5 className="font-medium md:text-2xl text-xl mb-2">
              Build real projects
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Access mentorship, resources, and guidance to level up your skills
              to navigate the challenges of building and scaling your startup.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
                  <span>Learn more </span>
                  <GoArrowRight className="inline-block" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-medium text-xl leading-4 mb-2  ">
                    Build real projects
                  </DialogTitle>
                  <DialogDescription className="font-normal text-neutral-700">
                    Learn how our club empowers students to build real projects
                  </DialogDescription>
                </DialogHeader>
                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 space-y-4 text-neutral-500">
                  <p className="text-sm">
                    At the Founders Club @ Hunter, ideas don’t stay on paper for
                    long. Members are encouraged to test them out, create early
                    versions, and see what works. Whether it’s a startup
                    concept, a social impact project, or a creative venture,
                    students get the support and structure they need to move
                    from “what if” to “let’s try it.”
                  </p>
                  <p className="text-sm">
                    Workshops, project sprints, and peer feedback sessions keep
                    things practical. Students collaborate across majors,
                    bringing different strengths to the table and learning from
                    one another along the way. They figure out how to validate
                    an idea, adjust when something isn’t working, and push
                    through the inevitable challenges that come with building
                    anything new. It’s hands-on experience that builds real
                    confidence.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out text-sm">
                      Close
                    </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
            <div className="text-orange-400 bg-orange-100 outline outline-orange-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <PiStudentLight />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-2">
              Student workshops
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Participate in hands-on workshops covering essential startup
              topics from product development to fundraising and marketing
              strategies.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
                  <span>Learn more </span>
                  <GoArrowRight className="inline-block" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-medium text-xl leading-4 mb-2  ">
                    Student workshops
                  </DialogTitle>
                  <DialogDescription className="font-normal text-neutral-700">
                    Learn how our club empowers students to participate in
                    student workshops
                  </DialogDescription>
                </DialogHeader>
                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 space-y-4 text-neutral-500">
                  <p className="text-sm">
                    At the Founders Club @ Hunter, learning goes far beyond
                    listening to speakers. Students roll up their sleeves and
                    take part in hands-on workshops designed to break down the
                    fundamentals of building a startup. From shaping an early
                    idea into a clear product concept to understanding who it’s
                    really for, members work through the practical steps that
                    turn a rough vision into something tangible.
                  </p>
                  <p className="text-sm">
                    Each session focuses on essential topics founders face every
                    day, including product development, fundraising, and
                    marketing strategy. Instead of theory, students work through
                    real examples, interactive exercises, and group challenges
                    that mirror real-world decisions. They learn how to test
                    assumptions, craft a compelling pitch, think through
                    pricing, and build momentum around an idea. The goal is
                    simple: give students tools they can actually use.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out text-sm">
                      Close
                    </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </header>
        </div>
        <div className="bg-neutral-100 relative rounded-2xl overflow-hidden group hover:scale-101 transition-all duration-300">
          <header className="md:p-8 p-6">
            <div className="text-pink-400 bg-pink-100 outline outline-pink-200 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
              <TbDeviceDesktopShare />
            </div>
            <h5 className="font-medium md:text-2xl text-xl mb-2">
              Present your work
            </h5>
            <p className="text-neutral-700 mb-3 md:text-base text-sm">
              Share to the world your projects, ideas, and goals. Hear back from
              peers, connect with investors, and celebrate your wins with us.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-main flex items-center gap-2 cursor-pointer md:text-base text-sm">
                  <span>Learn more </span>
                  <GoArrowRight className="inline-block" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-medium text-xl leading-4 mb-2  ">
                    Present your work
                  </DialogTitle>
                  <DialogDescription className="font-normal text-neutral-700">
                    Learn how our club empowers students present their work
                  </DialogDescription>
                </DialogHeader>
                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 space-y-4 text-neutral-500">
                  <p className="text-sm">
                    At the Founders Club @ Hunter, students are given real
                    opportunities to step up and share what they’ve been
                    building. Whether it’s a startup idea, a prototype, or early
                    traction from a project, members are encouraged to present
                    their work in front of peers, mentors, and experienced
                    founders. These moments help students move from working
                    quietly behind the scenes to confidently owning their ideas
                    in public.
                  </p>
                  <p className="text-sm">
                    At the same time, they get real feedback from peers who are
                    just as ambitious and curious. That exchange of ideas sparks
                    collaboration, new perspectives, and better solutions.
                    Instead of working in isolation, students become part of a
                    community that celebrates progress, encourages risk-taking,
                    and values the courage it takes to share something you’ve
                    built.
                  </p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <button className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out text-sm">
                      Close
                    </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </header>
        </div>
      </section>
    </div>
  );
}
