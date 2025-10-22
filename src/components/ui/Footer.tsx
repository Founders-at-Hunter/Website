"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import navigationLinks from "@/constants/NavigationLinks.json";
import { usePathname } from "next/navigation";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="px-4 py-12 flex justify-between sm:flex-row flex-col w-full">
      <section className="sm:max-w-1/2 space-y-2 sm:mb-0 mb-4">
        <div className="flex items-center gap-2">
          <Image
            src="/founders_logo_icon.png"
            alt="Founders Logo Icon"
            width={39.5}
            height={50}
          />
          <Image
            src="/founders_logo_text.png"
            alt="Founders Logo Text"
            width={137.6}
            height={40}
          />
        </div>
        <p className="text-sm text-black/60">
          Our mission is to Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Earum adipisci officiis incidunt libero eveniet fugiat,
          necessitatibus.
        </p>
        <div className="flex items-center gap-8">
          {navigationLinks.map(({ title, href }, index) => (
            <Link
              href={href}
              key={index}
              className={`transition-all duration-300 text-sm ${
                pathname === href
                  ? "underline underline-offset-4 text-main font-medium"
                  : "text-black/60 hover:text-main/60"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
      <aside className="flex sm:flex-col items-center sm:gap-2 gap-4">
        <Link
          href="/"
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <FaDiscord className="text-neutral-500" />
        </Link>
        <Link
          href="/"
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <RiInstagramFill className="text-neutral-500" />
        </Link>
        <Link
          href="/"
          className="bg-neutral-100 p-2 rounded-full hover:brightness-95 active:brightness-95 transition-all duration-300"
        >
          <FaLinkedin className="text-neutral-500" />
        </Link>
      </aside>
    </footer>
  );
}
