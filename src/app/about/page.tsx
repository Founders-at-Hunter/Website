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
    </div>
  );
}
