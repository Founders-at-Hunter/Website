"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPageRefresh() {
  const router = useRouter();
  return (
    <button
      className="px-5 py-2 rounded-xl bg-red-700/10 text-red-500 cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out md:text-base text-sm inline-block"
      onClick={() => router.refresh()}
    >
      Try again
    </button>
  );
}
