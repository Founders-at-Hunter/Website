import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import JoinUsForm from "@/components/ui/JoinUsForm";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 grid md:grid-cols-2 gap-x-24 gap-y-8 items-center">
      <aside className="space-y-2">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] brightness-95 outline-1 -outline-offset-1 outline-[#FFC72A]/15  w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          Founders @ Hunter College
        </h6>
        <h1 className="md:text-4xl text-3xl font-medium md:leading-11 leading-9 text-neutral-700 mb-2">
          Building the Next Generation <br className="xl:block hidden" /> of{" "}
          <SparklesText className="md:text-4xl text-3xl md:leading-11 leading-9 text-neutral-700 inline-block">
            Student Entrepreneurs
          </SparklesText>
        </h1>
        <h3 className="text-neutral-700 md:text-lg text-base mb-4">
          Connect with like-minded founders, learn from industry leaders, and
          turn your ideas into reality <br className="2xl:block hidden" />{" "}
          through our workshops, events, and community.
        </h3>
        <div className="space-x-3">
          <Link
            className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm inline-block"
            href="https://www.hunter.cuny.edu/news/two-hunter-college-seniors-start-club-for-tech-entrepreneurs/"
          >
            Our story
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
                }}
              >
                Join us
              </button>
            </DialogTrigger>
            <JoinUsForm />
          </Dialog>
        </div>
      </aside>
      <aside>
        <img
          src="/cc-graduate-standing-crowd-sp19.jpg.optimal.jpg"
          alt="Mission Banner"
          className="w-full max-w-lg h-full aspect-[1629/1741] animate-blob overflow-hidden md:ml-auto md:mr-0 mx-auto object-cover"
        />
      </aside>
    </div>
  );
}
