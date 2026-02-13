import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse upcoming and past events from Founders @ Hunter — workshops, networking nights, open mics, and more at Hunter College.",
};

export default function EventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
