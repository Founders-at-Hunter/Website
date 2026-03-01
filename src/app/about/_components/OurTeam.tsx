import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const TEAM = [
  {
    name: "Samuel Michnik",
    src: "/team/samuelmichnik.jpg",
    bio: "CS Senior and also the Founder! Let's build together.",
    position: "President",
    contact: "https://linkedin.com/in/samuel-michnik",
  },
  {
    name: "Angst Gregory",
    src: "/team/angstgregory.jpg",
    bio: "I also made this website and I'm a senior the goat as they say.",
    position: "Vice President",
    contact: "https://www.linkedin.com/in/angst-gregory",
  },
  {
    name: "Omar Chowdhurry",
    src: "/team/omarchowdhurry.jpg",
    bio: "I'm a sophomore majoring in Computer Science.",
    position: "Secretary",
    contact: "",
  },
  {
    name: "Josiah Balkissoon",
    src: "/team/josiahbalkissoon.jpg",
    bio: "Econ & Business Studies major. Former IBM dev. Training in the martial art of Jeet Kune Do. In pursuit of greatness.",
    position: "Treasurer / Marketing",
    contact: "https://www.linkedin.com/in/josiah-balkissoon",
  },
  {
    name: "Lisa Lin",
    src: "/team/lisalin.jpg",
    bio: "Hi! I'm a sophomore Economics major at Hunter, and I'm always excited to make new connections!",
    position: "Treasurer Intern",
    contact: "https://www.linkedin.com/in/lisalin4219/",
  },
  {
    name: "Don Suhanda",
    src: "/team/donsuhanda.jpg",
    bio: "Hey, I am a junior majoring in CS and minoring in Music. I love playing the piano in my free time and am currently reading Paradise Lost!.",
    position: "EVENT COORDINATOR",
    contact: "",
  },
  {
    name: "Saad Kashif",
    src: "/team/saadkashif.jpg",
    bio: "Hey! 👋, I'm Saad. I'm a Junior studying Computer Science & Economics. I love working on fun impactful projects and expanding my network.",
    position: "Workshop Lead",
    contact: "https://saad220905.github.io/my-website/#contact",
  },
  {
    name: "Artemis Brisnovali",
    src: "/team/artemisbrisnovali.jpg",
    bio: "Hi, I'm a freshman interested in studying business management! I'm focused on connections, creativity, and personal growth.",
    position: "Social Media Chair",
    contact: "",
  },
  {
    name: "Jaho (Jay) Music",
    src: "/team/jaho(jay)music.jpg",
    bio: "Hi, I am a freshman, major undeclared.",
    position: "Marketing Intern",
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
    name: "Rafi Uddin",
    src: "/team/rafiuddin.jpg",
    bio: "Hey, I love playing soccer and learning more about the world. 🤙",
    position: "Photographer",
    contact: "",
  },
  {
    name: "Ray Chu",
    src: "/team/raychu.PNG",
    bio: "👋 Hello, I am a freshman studying CS as a Daedalus Scholar. I also made this website.",
    position: "Tech Lead",
    contact: "https://www.linkedin.com/in/raychu83/",
  },
];

export default function OurTeam() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="mb-6">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] brightness-95 outline-1 -outline-offset-1 outline-[#FFC72A]/15  w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          Our team
        </h6>
        <h1 className="md:text-3xl text-2xl font-medium text-neutral-700 mb-2">
          Get to know our team
        </h1>
        <h3 className="text-neutral-700 md:text-lg text-base">
          See who is running the club behind the scenes
        </h3>
      </header>
      <section className="flex flex-nowrap overflow-auto gap-4 items-stretch no-scrollbar snap-x snap-mandatory">
        {TEAM.map((teamMember, index) => (
          <div
            className="rounded-2xl overflow-hidden relative group 2xl:w-[18%] xl:w-[22.5%] lg:w-[30%] sm:w-[40%] w-[75%] shrink-0 snap-start"
            key={index}
          >
            <img
              src={teamMember.src}
              alt={teamMember.name}
              className="aspect-[2/3] object-cover brightness-125 size-full"
            />
            <div
              className="absolute size-full top-0 left-0 z-5"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
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
                <h4 className="text-xs underline underline-offset-4 font-semibold tracking-wider decoration-1 uppercase text-[#FFC72A]">
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
