import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TEAM = [
  {
    name: "Angst Gregory",
    src: "/team/angstgregory.jpg",
    bio: "I also made this website and I'm a senior the goat as they say.",
    position: "Vice President",
    contact: "https://www.linkedin.com/in/angst-gregory",
  },
  {
    name: "Ray Chu",
    src: "/team/raychu.PNG",
    bio: "👋 Hello, I am a freshman studying CS as a Daedalus Scholar. I also made this website.",
    position: "Tech Lead",
    contact: "https://www.linkedin.com/in/raychu83/",
  },
  {
    name: "Artemis Brisnovali",
    src: "/team/artemisbrisnovali.jpg",
    bio: "Hi, I'm a freshman interested in studying business management! I'm focused on connections, creativity, and personal growth.",
    position: "Social Media Chair",
    contact: "",
  },
  {
    name: "Rafi Uddin",
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
  {
    name: "Lisa Lin",
    src: "/team/lisalin.jpg",
    bio: "Hi! I'm a sophomore Economics major at Hunter, and I'm always excited to make new connections!",
    position: "Treasurer Intern",
    contact: "https://www.linkedin.com/in/lisalin4219/",
  },
  {
    name: "Josiah Balkissoon",
    src: "/team/josiahbalkissoon.jpg",
    bio: "Econ & Business Studies major. Former IBM dev. Training in the martial art of Jeet Kune Do. In pursuit of greatness.",
    position: "Treasurer / Marketing",
    contact: "https://www.linkedin.com/in/josiah-balkissoon",
  },
  {
    name: "Jaho (Jay) Music",
    src: "/team/jaho(jay)music.jpg",
    bio: "Hi, I am a freshman, major undeclared.",
    position: "Marketing Intern",
    contact: "",
  },
  {
    name: "Don Suhanda",
    src: "/team/donsuhanda.jpg",
    bio: "Hey, I am a junior majoring in CS and minoring in Music. I love playing the piano in my free time and am currently reading Paradise Lost!.",
    position: "EVENT COORDINATOR",
    contact: "",
  },
];

export default function OurTeam() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="space-y-2.5 mb-6">
        <h2 className="md:text-3xl text-2xl font-medium mb-1">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Meet our team
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700 md:text-base text-sm">
          See who is running the club behind the scenes
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {TEAM.map((teamMember, index) => (
          <div
            className="rounded-2xl overflow-hidden relative hover:scale-103 transition-all duration-300 ease-in-out"
            key={index}
          >
            <Image
              src={teamMember.src}
              alt={teamMember.name}
              width={400}
              height={600}
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
                      ? "cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out"
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
