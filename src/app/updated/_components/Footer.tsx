import { Highlighter } from "@/components/ui/highlighter";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="md:mx-8 mx-6">
      <hr className="opacity-20" />
      <div className="flex items-center justify-between py-6 gap-6">
        <p className="text-sm text-neutral-400 font-light">
          © 2026 Founders @ Hunter College. All rights reserved.
        </p>
        <p className="text-sm tracking-wider text-neutral-600 font-light">
          Website built by{" "}
          <Link href="/" className="font-medium">
            <Highlighter>Ray Chu</Highlighter>
          </Link>
        </p>
      </div>
    </footer>
  );
}
