import NavMenu from "@/components/ui/NavMenu";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Founders @ Hunter",
};

export default function Projects() {
  return (
    <div>
      <NavMenu />
    </div>
  );
}
