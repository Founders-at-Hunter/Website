import CoreValues from "@/components/pages/about/CoreValues";
import Mission from "@/components/pages/about/Mission";
import Team from "@/components/pages/about/Team";
import Footer from "@/components/ui/Footer";
import NavMenu from "@/components/ui/NavMenu";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - Founders @ Hunter",
};

export default function About() {
  return (
    <div>
      <NavMenu />
      <main className="mt-[81px] max-w-7xl m-auto">
        <Mission />
        <CoreValues />
        <Team />
        <Footer />
      </main>
    </div>
  );
}
