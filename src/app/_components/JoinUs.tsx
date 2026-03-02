import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import JoinUsForm from "@/components/ui/JoinUsForm";

export default function JoinUs() {
  return (
    <section className="bg-neutral-100 md:m-8 m-6 rounded-2xl relative overflow-hidden grid grid-rows-2 md:grid-cols-2">
      <header className="md:p-12 p-8 md:row-span-2">
        <h1 className="md:text-4xl text-3xl mb-2 md:leading-12 leading-10">
          Accelerate your start up journey
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <button className="md:text-2xl text-xl text-main cursor-pointer mb-8">
              <span>Join our club today</span>{" "}
              <MdOutlineKeyboardArrowRight className="inline-block" />
            </button>
          </DialogTrigger>
          <JoinUsForm />
        </Dialog>
        <div className="flex items-center gap-8">
          <Link
            href="https://www.linkedin.com/company/founders-hunter-1/"
            className="md:text-xl text-lg p-2 rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
            target="_blank"
          >
            <FaLinkedin className="block" />
          </Link>
          <Link
            href="https://www.instagram.com/hunter.founders/"
            className="md:text-xl text-lg p-2 rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
            target="_blank"
          >
            <RiInstagramFill className="block" />
          </Link>
          <Link
            href="https://discord.com/invite/c4ax3fSCqN"
            className="md:text-xl text-lg p-2 rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
            target="_blank"
          >
            <FaDiscord className="block" />
          </Link>
          <Link
            href="https://chat.whatsapp.com/GyaXWGdD84cFlcYtOBNA4f"
            className="md:text-2xl text-xl p-2 rounded-lg hover:bg-neutral-200 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
            target="_blank"
          >
            <RiWhatsappFill className="block" />
          </Link>
        </div>
      </header>
      <div className="relative md:row-span-2">
        <img
          src="/apps.png"
          alt="Apps"
          className="absolute w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
    radial-gradient(circle at center, rgba(245,245,245,0) 50%, #f5f5f5 100%),
    linear-gradient(to bottom, #f5f5f5 5%, rgba(245,245,245,0) 40%, rgba(245,245,245,0) 60%, #f5f5f5 95%),
    linear-gradient(to right, #f5f5f5 0%, rgba(245,245,245,0) 20%, rgba(245,245,245,0) 80%, #f5f5f5 100%)
  `,
          }}
        />
      </div>
    </section>
  );
}
