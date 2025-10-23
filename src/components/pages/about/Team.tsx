import Heading from "@/components/ui/Heading";
import React from "react";
import TeamMembers from "@/constants/TeamMembers.json";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";

export default function Team() {
  return (
    <section className="flex flex-col gap-2 p-4">
      <Heading
        headerCN="mb-1"
        title="Meet the team:"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="flex flex-wrap gap-6 justify-center">
        {TeamMembers.map((teamMember, index) => (
          <TeamMemberCard
            key={index}
            image={teamMember.image}
            name={teamMember.name}
            position={teamMember.position}
            major={teamMember.major}
            linkedin={teamMember.linkedin}
            email={teamMember.email}
            instagram={teamMember.instagram}
          />
        ))}
        <BecomeMember />
      </div>
    </section>
  );
}

function TeamMemberCard({
  image,
  name,
  position,
  major,
  linkedin,
  instagram,
  email,
}: {
  image: string;
  name: string;
  position: string;
  major: string;
  linkedin: string;
  email: string;
  instagram: string;
}) {
  return (
    <div className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex flex-col gap-2 items-center justify-center py-12 px-8 bg-white outline outline-main -outline-offset-1 rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black/5 transition-all duration-300">
      <img
        src={image}
        alt={`${name} Photo`}
        width={80}
        height={80}
        className="rounded-2xl"
      />
      <h4 className="text-center">{name}</h4>
      <p className="text-sm text-black/60 text-center">
        {position} - {major}
      </p>
      <div className="flex items-center gap-2">
        <Link
          href={linkedin}
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <FaLinkedin className="text-neutral-500" />
        </Link>
        <Link
          href={email}
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <MdEmail className="text-neutral-500" />
        </Link>
        <Link
          href={instagram}
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <AiFillInstagram className="text-neutral-500" />
        </Link>
      </div>
    </div>
  );
}

function BecomeMember() {
  return (
    <div className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex flex-col gap-2 items-center justify-center py-12 px-8 bg-white outline outline-main -outline-offset-1 rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black/5 transition-all duration-300">
      <div className="p-4 rounded-2xl bg-main/25 w-fit m-auto">
        <IoPersonSharp className="text-white text-5xl" />
      </div>
      <h4 className="text-center">Become a member</h4>
      <p className="text-sm text-black/60 text-center">
        Join Founders @ Hunter Today
      </p>
      <Link href="" className="text-sm underline text-black/80 m-auto">
        Join the club
      </Link>
    </div>
  );
}
