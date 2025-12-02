import Projects from "@/components/pages/projects/Projects";
import ProjectsHeader from "@/components/pages/projects/ProjectsHeader";
import Footer from "@/components/ui/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Founders @ Hunter",
};

export default function ProjectsPage() {
  return (
    <>
      {/* mt-[105px] (NavMenu: 81px) */}
      <main className="mt-[81px] max-w-[1560px] m-auto">
        <ProjectsHeader />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
