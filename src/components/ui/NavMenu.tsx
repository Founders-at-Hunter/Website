"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import navigationLinks from "@/constants/NavigationLinks.json";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";
import { createPortal } from "react-dom";
import { Dialog, DialogTrigger } from "./dialog";
import { cn } from "@/lib/utils";
import { GoArrowRight } from "react-icons/go";
import JoinUsForm from "./JoinUsForm";
import ContactForm from "./ContactForm";

export default function NavMenu() {
  const [navOpened, setNavOpened] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Runs only on client
    const el = document.getElementById("portal-root");
    setPortalRoot(el);
  }, []);

  return (
    <nav className="bg-white fixed top-0 w-full z-20">
      <div className="flex items-center justify-between max-w-[1896px] m-auto py-4 px-8">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/founders_logo_icon.png"
            alt="Founders Logo Icon"
            width={40}
            height={50}
          />
          <Image
            src="/founders_logo_text.png"
            alt="Founders Logo Text"
            width={138}
            height={40}
            className="md:block hidden"
          />
        </Link>
        <div className="md:flex items-center justify-center gap-8 hidden">
          {navigationLinks.map(({ title, href }, index) => (
            <Link
              href={href}
              key={index}
              className={`transition-all duration-300 tracking-widest text-neutral-700 ${
                pathname === href ? "underline underline-offset-8" : ""
              }`}
            >
              {title}
            </Link>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <button
                className={`transition-all duration-300 tracking-widest text-neutral-700`}
              >
                Contact
              </button>
            </DialogTrigger>
            <ContactForm />
          </Dialog>
        </div>
        <aside className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className={cn(
                  "bg-main/10 text-main px-5 py-2 rounded-xl cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm",
                  navOpened
                    ? "md:visible md:opacity-100 invisible opacity-0"
                    : "opacity-100 visible",
                )}
              >
                Join us
              </button>
            </DialogTrigger>
            <JoinUsForm />
          </Dialog>
          <button
            className="text-black md:text-2xl text-xl md:hidden block cursor-pointer hover:scale-95 active:scale-95 transition"
            onClick={() => {
              setNavOpened((prev) => !prev);
            }}
          >
            <TbMenuDeep />
          </button>
        </aside>
        {portalRoot &&
          createPortal(
            <div
              className={`bg-white fixed w-full h-[calc(100dvh-81.38px)] top-[81.38px] flex flex-col items-center justify-between z-10 transition-all duration-300 ${
                navOpened
                  ? "opacity-100 visible left-0 md:-left-full"
                  : "opacity-0 invisible -left-full"
              }`}
            >
              <div className="flex flex-col items-center justify-between w-full p-4">
                {navigationLinks.map(({ title, href }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 ${
                      pathname === href
                        ? "underline underline-offset-8 text-main font-medium"
                        : "text-neutral-700"
                    }`}
                    onClick={() => {
                      setNavOpened(false);
                    }}
                  >
                    {title}
                    <GoArrowRight className="text-xl" />
                  </Link>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={`w-full flex items-center justify-between p-4 transition-all duration-300 hover:bg-main/5 active:bg-main/5 text-neutral-700`}
                    >
                      Contact
                      <GoArrowRight className="text-xl" />
                    </button>
                  </DialogTrigger>
                  <ContactForm />
                </Dialog>
              </div>
              <div className="p-4 w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={cn(
                        "bg-main/10 text-main p-4 w-full rounded-xl cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out",
                      )}
                    >
                      Join us
                    </button>
                  </DialogTrigger>
                  <JoinUsForm />
                </Dialog>
              </div>
            </div>,
            portalRoot,
          )}
      </div>
    </nav>
  );
}
