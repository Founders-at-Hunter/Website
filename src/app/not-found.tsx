import NotFoundPageRefresh from "@/components/NotFoundPageRefresh";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "404  Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-4 px-8 mx-auto"
      style={{
        minHeight: "calc(100dvh - 82px)",
        paddingBottom: "calc(24px + 82px",
      }}
    >
      <div className="mb-4">
        <img
          src="/not-found.svg"
          alt="Not Found"
          className="w-full h-full max-w-lg m-auto"
        />
      </div>
      <h1 className="font-medium tracking-wide md:text-3xl text-2xl text-neutral-700">
        404 - Page not found
      </h1>
      <p className="text-neutral-500 md:text-base text-sm">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex gap-4">
        <Link
          className="px-5 py-2 rounded-xl bg-main/10 text-main cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm inline-block"
          href="/"
        >
          Go home
        </Link>
        <NotFoundPageRefresh />
      </div>
    </div>
  );
}
