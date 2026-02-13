import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Highlighter } from "@/components/ui/highlighter";
import JoinUsForm from "@/components/ui/JoinUsForm";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 grid md:grid-cols-2 gap-x-24 gap-y-8 items-center">
      <aside className="space-y-2">
        <h6
          className="bg-main w-fit text-white rounded-full px-4 py-1.5 font-light md:text-sm text-xs mb-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
          }}
        >
          Founders @ Hunter <span className="ml-1.5">🚀</span>
        </h6>
        <h1 className="md:text-4xl text-3xl font-bold md:leading-12 leading-10 text-neutral-700 tracking-wide">
          Building the Next Generation <br className="xl:block hidden" /> of{" "}
          <Highlighter
            action="highlight"
            color="#FFC72A"
            iterations={3}
            strokeWidth={100}
          >
            Student Entrepreneurs
          </Highlighter>
        </h1>
        <h3 className="text-neutral-700 md:text-base text-sm">
          Connect with like-minded founders, learn from industry leaders, and
          turn your ideas into reality through our workshops, events, and
          community.
        </h3>
        <div className="space-x-3">
          <button
            className="px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm"
            style={{
              backgroundImage:
                "linear-gradient(to top, #000000 0%, #555555 100%)",
            }}
          >
            Learn more
          </button>
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
        <Image
          src="/DSC00870.JPG"
          alt="Mission Banner"
          width={815}
          height={871}
          className="w-full max-w-lg h-full aspect-[1629/1741] rounded-[50%_50%_30%_70%/60%_40%_60%_40%] overflow-hidden md:ml-auto md:mr-0 mx-auto saturate-0"
        />
      </aside>
    </div>
  );
}
