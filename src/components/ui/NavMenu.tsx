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
    <nav className="bg-white/85 backdrop-blur-xl backdrop-saturate-200 fixed top-0 w-full z-20">
      <div className="flex items-center justify-between max-w-[1920px] m-auto py-4 px-8">
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
              className={`transition-all duration-300 ${
                pathname === href
                  ? "underline underline-offset-4 text-main font-medium"
                  : "text-black/60 hover:text-main/60"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
        <aside className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className={cn(
                  "px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out",
                  navOpened
                    ? "md:visible md:opacity-100 invisible opacity-0"
                    : "opacity-100 visible",
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #000000 0%, #555555 100%)",
                }}
              >
                Join us
              </button>
            </DialogTrigger>
            <JoinUsForm />
          </Dialog>
          <button
            className="text-black text-2xl md:hidden block cursor-pointer hover:scale-95 active:scale-95 transition-all"
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
              className={`bg-white/90 backdrop-blur-xl backdrop-saturate-200 fixed w-full h-[calc(100dvh-81.38px)] top-[81.38px] flex flex-col items-center justify-between z-10 transition-all duration-300 ${
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
                        ? "underline underline-offset-4 text-main font-medium"
                        : "text-black/60 hover:text-main/60"
                    }`}
                    onClick={() => {
                      setNavOpened(false);
                    }}
                  >
                    {title}
                    <GoArrowRight className="text-xl" />
                  </Link>
                ))}
              </div>
              <div className="p-4 w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={cn(
                        "p-4 w-full rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out",
                      )}
                      style={{
                        backgroundImage:
                          "linear-gradient(to top, #000000 0%, #555555 100%)",
                      }}
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
