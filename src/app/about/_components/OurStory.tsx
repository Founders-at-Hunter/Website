import React from "react";

export default function WhoWeAre() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 grid lg:grid-cols-2 items-center gap-x-12 gap-y-4">
      <header className="space-y-2.5 mb-6">
        <h6
          className="bg-main w-fit text-white rounded-full px-4 py-1.5 font-light md:text-sm text-xs mb-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
          }}
        >
          Our backstory <span className="ml-1.5">📖</span>
        </h6>
        <h1 className="md:text-3xl text-2xl font-medium mb-1">
          How the club was founded
        </h1>
        <h4 className="italic font-medium tracking-wide text-[hsl(44,100%,48%)] md:text-base text-sm">
          Founded on: 10-27-2025
        </h4>
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
      <aside>
        <img
          src="/team.JPG"
          alt="Our team"
          className="w-full h-full max-w-lg lg:ml-auto lg:mr-0 mx-auto saturate-0 object-cover rounded-2xl"
        />
      </aside>
    </div>
  );
}
