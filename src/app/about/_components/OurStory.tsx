import React from "react";

export default function WhoWeAre() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 grid lg:grid-cols-10 items-center gap-x-12 gap-y-6">
      <header className="mb-4 lg:col-span-4">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] brightness-95 outline-1 -outline-offset-1 outline-[#FFC72A]/15  w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          Our backstory
        </h6>
        <h1 className="md:text-3xl text-2xl font-medium text-neutral-700 mb-2">
          Launching Founders @ Hunter
        </h1>
        <h4 className="text-main md:text-lg text-base mb-3">Est. Fall 2025</h4>
        <p className="text-neutral-700 mb-6 md:text-base text-sm">
          Founders @ Hunter was created by two computer science seniors who saw
          the need for a space where Hunter students could explore tech
          entrepreneurship beyond traditional corporate careers. After
          experiencing the energy of hackathons and networking events outside
          campus, the founders wanted to bring that collaborative spirit back to
          Hunter creating a community where students don&apos;t just network,
          but collide with ideas and build together.
        </p>
        <p className="text-neutral-700 md:text-base text-sm">
          With Professor Arabella Pollack from the Certificate in Business
          Studies program as our faculty adviser, we launched with a simple but
          powerful mission: connect students with complementary skills and
          empower them to explore alternative paths through hands on, community
          driven experiences. Whether you&apos;re a computer science major
          looking for a marketing genius, a designer seeking technical
          co-founders, or someone who just loves building things Founders @
          Hunter is your launchpad. We&apos;re here to show that there are many
          ways to succeed, and not all of them lead to a corporate position.
        </p>
      </header>
      <aside className="lg:col-span-6 relative">
        <img
          src="/team.JPG"
          alt="Our team"
          className="w-full h-full max-w-2xl lg:ml-auto lg:mr-0 mx-auto object-cover rounded-2xl saturate-75"
          style={{ borderRadius: "50% 20% / 10% 40%" }}
        />
      </aside>
    </div>
  );
}
