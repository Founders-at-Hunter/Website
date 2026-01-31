import DitherShader from "@/components/ui/dither-shader";
import { Highlighter } from "@/components/ui/highlighter";
import React from "react";

export default function Hero() {
  return (
    <div className="p-8 grid md:grid-cols-2 gap-x-24 gap-y-12 items-center">
      <aside className="space-y-2">
        <h4
          className="w-fit text-white rounded-full px-4 py-1.5 font-light drop-shadow-2xl drop-shadow-main/30 text-sm mb-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%);",
          }}
        >
          Founders @ Hunter <span className="ml-1.5">🚀</span>
        </h4>
        <h1 className="text-4xl font-bold leading-12 text-neutral-700 tracking-wide">
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
        <h3 className="text-lg text-neutral-700">
          Connect with like-minded founders, learn from industry leaders, and
          turn your ideas into reality through our workshops, events, and
          community.
        </h3>
        <div className="space-x-3">
          <button
            className="px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out"
            style={{
              backgroundImage:
                "linear-gradient(to top, #000000 0%, #555555 100%);",
            }}
          >
            Learn more
          </button>
          <button
            className="px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out"
            style={{
              backgroundImage:
                "linear-gradient(to top, #5f259f 0%, #9258d2 100%);",
            }}
          >
            Join us
          </button>
        </div>
      </aside>
      <aside>
        <DitherShader
          src="/DSC00870.JPG"
          gridSize={1}
          // ditherMode="bayer"
          colorMode="duotone"
          primaryColor="#000000"
          secondaryColor="#EEEEEE"
          threshold={0.2}
          className="w-full max-w-lg h-full aspect-[1629/1741] rounded-[50%_50%_30%_70%/60%_40%_60%_40%] overflow-hidden md:ml-auto"
        />
      </aside>
    </div>
  );
}
