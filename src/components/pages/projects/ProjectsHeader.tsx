"use client";
import Heading from "@/components/ui/Heading";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

export default function ProjectsHeader() {
  const [searchOpened, setSearchOpened] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="flex items-center justify-between gap-4 p-4">
        {searchOpened ? (
          <div className="flex items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Search projects"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 transition-all duration-300"
              autoFocus
            />
            <button
              className="text-lg opacity-60 hover:opacity-100 active:opacity-100 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSearchOpened(false);
              }}
            >
              <RiCloseLargeFill />
            </button>
            <button className="text-lg opacity-60 hover:opacity-100 active:opacity-100 transition-all duration-300 cursor-pointer">
              <IoSearch />
            </button>
          </div>
        ) : (
          <>
            <Heading
              title="Explore Student Led Projects:"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <div className="flex items-center gap-3">
              <button className="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-200 rounded-full text-xl p-2 cursor-pointer transition-all duration-300">
                <IoMdAdd />
              </button>
              <button
                className="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-200 rounded-full text-xl p-2 cursor-pointer transition-all duration-300"
                onClick={() => {
                  setSearchOpened(true);
                }}
              >
                <IoSearch />
              </button>
            </div>
          </>
        )}
      </section>
      <hr className="mx-4 block" />
    </>
  );
}
