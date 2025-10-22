"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import navigationLinks from "@/constants/NavigationLinks.json";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";
import { createPortal } from "react-dom";
import { MdArrowRightAlt } from "react-icons/md";
import {
  disablePageScroll,
  enablePageScroll,
  clearQueueScrollLocks,
} from "scroll-lock";

export default function NavMenu() {
  const [navOpened, setNavOpened] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Runs only on client
    const el = document.getElementById("portal-root");
    setPortalRoot(el);
  }, []);

  useEffect(() => {
    if (!windowWidth) return;
    clearQueueScrollLocks();
    if (navOpened && windowWidth < 640) {
      console.log("DISABLED PAGE");
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [navOpened, windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-xl backdrop-saturate-200 fixed top-0 w-full z-20">
      <div className="flex items-center justify-between max-w-7xl m-auto p-4">
        <Link href="/" className="flex items-center justify-center gap-2">
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
            className="sm:block hidden"
          />
        </Link>
        <div className="sm:flex items-center justify-center gap-8 hidden">
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
          <button
            className={`bg-black hover:bg-black/80 active:bg-black/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300 ${
              navOpened
                ? "sm:visible sm:opacity-100 invisible opacity-0"
                : "opacity-100 visible"
            }`}
          >
            Register
          </button>
          <button
            className="text-black text-2xl sm:hidden block cursor-pointer hover:scale-95 active:scale-95 transition-all"
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
                      clearQueueScrollLocks();
                      enablePageScroll();
                      setNavOpened(false);
                    }}
                  >
                    {title}
                    <MdArrowRightAlt />
                  </Link>
                ))}
              </div>
              <div className="p-4 w-full">
                <button className="p-4 w-full bg-black text-white hover:bg-black/80 active:bg-black/80 transition-all duration-300 cursor-pointer">
                  Register
                </button>
              </div>
            </div>,
            portalRoot
          )}
      </div>
    </nav>
  );
}
