import type { Metadata } from "next";
import React from "react";
import Hero from "./_components/Hero";
import Events from "./_components/Events";
import WhatStudentsGain from "./_components/WhatStudentsGain";

export const metadata: Metadata = {
  title: "Home | Founders @ Hunter",
  description:
    "Building the next generation of student entrepreneurs at Hunter College. Join workshops, events, and a community of like-minded founders.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <WhatStudentsGain />
    </>
  );
}
