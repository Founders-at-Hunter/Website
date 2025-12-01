"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import navigationLinks from "@/constants/NavigationLinks.json";
import { usePathname } from "next/navigation";
import { TbMenuDeep } from "react-icons/tb";
import { createPortal } from "react-dom";
import { MdArrowRightAlt } from "react-icons/md";
import PopUp from "./PopUp";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "sonner";

export default function NavMenu() {
  const [navOpened, setNavOpened] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [registerValues, setRegisterValues] = useState({ name: "", email: "" });
  const [registeredEmail, setRegisteredEmail] = useState("");

  const pathname = usePathname();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerValues),
    });
    console.log(await res.json());
    if (res.ok) {
      document.cookie = `registeredEmail=${registerValues.email};`;
      setRegisteredEmail(registerValues.email);
      setRegisterValues({ name: "", email: "" });
      toast.success("Successfully registered to the club!");
    } else {
      toast.error("Failed to register. Please try again.");
    }
  };

  useEffect(() => {
    // Runs only on client
    const el = document.getElementById("portal-root");
    setPortalRoot(el);
  }, []);

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

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const registeredEmailCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("registeredEmail=")
    );
    if (registeredEmailCookie) {
      const email = registeredEmailCookie.split("=")[1];
      setRegisteredEmail(decodeURIComponent(email));
    }
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-xl backdrop-saturate-200 fixed top-0 w-full z-20">
      <div className="flex items-center justify-between max-w-7xl m-auto p-4">
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
          <PopUp
            content={(togglePopUp) => (
              <>
                <header className="flex items-center justify-between gap-8 mb-1.5">
                  <div>
                    <h3 className="text-lg text-charcoal font-semibold">
                      Register to the Club:
                    </h3>
                    <p className="text-black/40 text-xs">
                      {registeredEmail
                        ? `You have registered with: "${registeredEmail}"`
                        : "Join over 50 people who have registered as well."}
                    </p>
                  </div>
                  <button
                    onClick={togglePopUp}
                    className="text-red-500 hover:saturate-75 text-xl cursor-pointer"
                  >
                    <AiOutlineClose aria-label="Close pop up" />
                  </button>
                </header>
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-2"
                >
                  <hr className="opacity-20" />
                  <div className="flex flex-col gap-1 w-full">
                    <label
                      htmlFor="register-name"
                      className="text-black/60 font-light text-xs"
                    >
                      Your name:
                    </label>
                    <input
                      type="text"
                      id="register-name"
                      placeholder="Enter name..."
                      value={registerValues.name}
                      required
                      onChange={(e) =>
                        setRegisterValues((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="bg-white/50 rounded-md p-2 hover:placeholder:text-black/40 hover:outline-black/20 focus:placeholder:text-black/25 placeholder:text-black/25 focus:outline-main/60 focus:outline-dashed outline-black/10 outline -outline-offset-1 text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label
                      htmlFor="register-email"
                      className="text-black/60 font-light text-xs"
                    >
                      Your email:
                    </label>
                    <input
                      type="email"
                      id="register-email"
                      placeholder="Enter email..."
                      value={registerValues.email}
                      required
                      onChange={(e) =>
                        setRegisterValues((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="bg-white/50 rounded-md p-2 hover:placeholder:text-black/40 hover:outline-black/20 focus:placeholder:text-black/25 placeholder:text-black/25 focus:outline-main/60 focus:outline-dashed outline-black/10 outline -outline-offset-1 text-xs"
                    />
                  </div>
                  <hr className="opacity-20" />
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="outline outline-main -outline-offset-1 text-main py-2 px-4 rounded-full cursor-pointer transition-all duration-300"
                      type="button"
                      onClick={togglePopUp}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-main hover:bg-main/80 active:bg-main/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </>
            )}
            trigger={<>Register</>}
            triggerContainerCN={`bg-black hover:bg-black/80 hover:outline-black/80 active:bg-black/80 active:outline-black/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300 outline-2 outline-black outline-offset-2 ${
              navOpened
                ? "md:visible md:opacity-100 invisible opacity-0"
                : "opacity-100 visible"
            }`}
          />
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
                    <MdArrowRightAlt />
                  </Link>
                ))}
              </div>
              <div className="p-4 w-full">
                <PopUp
                  content={(togglePopUp) => (
                    <>
                      <header className="flex items-center justify-between gap-8 mb-1.5">
                        <h3 className="text-xl text-charcoal font-semibold">
                          Register to the Club:
                        </h3>
                        <button
                          onClick={togglePopUp}
                          className="text-red-500 hover:saturate-75 text-xl cursor-pointer"
                        >
                          <AiOutlineClose aria-label="Close pop up" />
                        </button>
                      </header>
                      <form onSubmit={() => {}} className="flex flex-col gap-2">
                        <hr className="opacity-20" />
                        <div className="flex flex-col gap-1 w-full">
                          <label
                            htmlFor="register-name"
                            className="text-black/60"
                          >
                            Your name:
                          </label>
                          <input
                            type="text"
                            id="register-name"
                            placeholder="Enter name..."
                            value={registerValues.name}
                            onChange={(e) =>
                              setRegisterValues((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="bg-white rounded-md p-2 hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 focus:outline-main/50 outline-transparent outline -outline-offset-1"
                          />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                          <label
                            htmlFor="register-email"
                            className="text-black/60"
                          >
                            Your email:
                          </label>
                          <input
                            type="email"
                            id="register-email"
                            placeholder="Enter email..."
                            value={registerValues.email}
                            onChange={(e) =>
                              setRegisterValues((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="bg-white rounded-md p-2 hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 focus:outline-main/50 outline-transparent outline -outline-offset-1"
                          />
                        </div>
                        <hr className="opacity-20" />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="outline outline-main -outline-offset-1 text-main py-2 px-4 rounded-full cursor-pointer transition-all duration-300"
                            type="button"
                            onClick={togglePopUp}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-main hover:bg-main/80 active:bg-main/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                  trigger={<>Register</>}
                  triggerContainerCN="p-4 w-full bg-black text-white hover:bg-black/80 active:bg-black/80 hover:outline-black/80 active:outline-black/80 transition-all duration-300 cursor-pointer outline-2 outline-black outline-offset-2"
                />
              </div>
            </div>,
            portalRoot
          )}
      </div>
    </nav>
  );
}
