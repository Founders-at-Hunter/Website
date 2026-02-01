import React from "react";
import JoinUs from "./_components/JoinUs";
import Footer from "./_components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JoinUs />
      <Footer />
    </>
  );
}
