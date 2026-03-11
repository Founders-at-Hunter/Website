import React from "react";

export default function Footer() {
  return (
    <footer className="md:mx-8 mx-6 space-y-4">
      <div className="flex items-center justify-between gap-6 mb-6">
        <p className="text-sm text-neutral-400 font-light">
          © 2026 Founders @ Hunter College. All rights reserved.
        </p>
        <p className="text-sm tracking-wider text-neutral-600 font-light overflow-hidden">
          Website built by Ray Chu & Angst Gregory
        </p>
      </div>
    </footer>
  );
}
