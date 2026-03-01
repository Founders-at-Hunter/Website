import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="md:mx-8 mx-6 space-y-4">
      <div className="flex items-center justify-end gap-8">
        <Link
          href="https://www.linkedin.com/company/founders-hunter-1/"
          className="text-lg p-2 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
          target="_blank"
        >
          <FaLinkedin className="block" />
        </Link>
        <Link
          href="https://www.instagram.com/hunter.founders/"
          className="text-lg p-2 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
          target="_blank"
        >
          <RiInstagramFill className="block" />
        </Link>
        <Link
          href="https://discord.com/invite/c4ax3fSCqN"
          className="text-lg p-2 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
          target="_blank"
        >
          <FaDiscord className="block" />
        </Link>
        <Link
          href="https://chat.whatsapp.com/GyaXWGdD84cFlcYtOBNA4f"
          className="text-lg p-2 rounded-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300 ease-in-out text-neutral-500"
          target="_blank"
        >
          <RiWhatsappFill className="block" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-6 mb-6">
        <p className="text-sm text-neutral-400 font-light">
          © 2026 Founders @ Hunter College. All rights reserved.
        </p>
        <p className="text-sm tracking-wider text-neutral-600 font-light overflow-hidden">
          Website built by Ray Chu
        </p>
      </div>
    </footer>
  );
}
