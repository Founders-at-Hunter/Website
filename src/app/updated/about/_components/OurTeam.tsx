import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const TEAM = [
  {
    name: "Angst Gregory",
    src: "/team/angstgregory.jpg",
    bio: "I also made this website and I'm a senior the goat as they say.",
    position: "Vice President",
    contact:
      "https://www.linkedin.com/in/angst-gregory?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Ray Chu",
    src: "/team/raychu.png",
    bio: "👋 Hello, I am a freshman studying CS as a Daedalus Scholar. I also made this website.",
    position: "Tech Lead",
    contact: "",
  },
  {
    name: "Artemis Brisnovali",
    src: "/team/artemisbrisnovali.jpg",
    bio: "Hi, I'm a freshman interested in studying business management! I'm focused on connections, creativity, and personal growth.",
    position: "Social Media Chair",
    contact: "",
  },
  {
    name: "Raffi Uddin",
    src: "/team/rafiuddin.jpg",
    bio: "Hey, I love playing soccer and learning more about the world. 🤙",
    position: "Photographer",
    contact: "",
  },
  {
    name: "Omar Chowdhurry",
    src: "/team/omarchowdhurry.jpg",
    bio: "I'm a sophomore majoring in Computer Science.",
    position: "Secretary",
    contact: "",
  },
  {
    name: "Lydia Zheng",
    src: "/team/lydiazheng.png",
    bio: "Hi, I'm Lydia a computer science major student at Hunter College! I am passionate about making creative projects.",
    position: "Graphic Designer",
    contact: "",
  },
];

export default function OurTeam() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="space-y-2.5 mb-6">
        <h2 className="md:text-3xl text-2xl font-medium">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Meet the team
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700">See who is apart of the club</h3>
      </header>
      <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {TEAM.map((teamMember, index) => (
          <div
            className="rounded-2xl overflow-hidden relative hover:scale-103 transition-all duration-300 ease-in-out"
            key={index}
          >
            <img
              src={teamMember.src}
              alt={teamMember.name}
              className="aspect-[2/3] object-cover brightness-125"
            />
            <div
              className="absolute size-full top-0 left-0 z-5"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div className="absolute bottom-0 w-full md:p-6 p-4 z-10">
              <h5 className="text-white font-semibold text-xl tracking-wider mb-1">
                {teamMember.name}
              </h5>
              <p className="text-sm text-neutral-200 mb-4 font-light">
                {teamMember.bio}
              </p>
              <div className="flex justify-between items-center gap-2">
                <h4 className="text-neutral-100 text-sm font-semibold tracking-wide uppercase">
                  {teamMember.position}
                </h4>
                <Link
                  className={cn(
                    "bg-white py-2 px-4 rounded-full text-sm",
                    teamMember.contact
                      ? "cursor-pointer"
                      : "opacity-50 cursor-default pointer-events-none",
                  )}
                  href={teamMember.contact ?? ""}
                  target="blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
