import type { Metadata } from "next";
import React from "react";
import Mission from "./_components/Mission";
import Values from "./_components/Values";
import OurStory from "./_components/OurStory";
import OurTeam from "./_components/OurTeam";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Founders @ Hunter — our mission, values, backstory, and the team behind Hunter College's entrepreneurship club.",
};

export default function About() {
  return (
    <>
      <Mission />
      <OurStory />
      <OurTeam />
      <Values />
    </>
  );
}
