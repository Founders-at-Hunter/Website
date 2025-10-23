import React from "react";
import projects from "@/constants/Projects.json";

export default function Projects() {
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-4">
        {projects.map((project, index) => (
          <div
            className="p-4 rounded-md bg-neutral-100 flex flex-col gap-1"
            key={index}
          >
            <div className="mb-2">
              <div className="relative">
                <img
                  src={project.image}
                  alt="Project Banner"
                  className="rounded-2xl w-full"
                />
                <img
                  src={project.logo}
                  alt="Project Logo"
                  className="rounded-full absolute top-4 right-4 size-5 drop-shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-auto no-scrollbar">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-neutral-200 px-2 py-1 rounded-md text-xs text-nowrap whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="font-medium text-lg">{project.title}</h4>
            <p className="text-sm text-black/60 mb-4">{project.subtitle}</p>
            <div className="flex items-center justify-center mt-auto gap-2">
              <button className="w-full outline outline-main -outline-offset-1 text-main rounded-full p-2 text-sm cursor-pointer hover:brightness-125 active:brightness-125 transition-all duration-300">
                Learn more
              </button>
              <button className="w-full bg-main text-white rounded-full p-2 text-sm cursor-pointer hover:brightness-125 active:brightness-125 transition-all duration-300">
                Apply
              </button>
            </div>
          </div>
        ))}
      </section>
      <div className="flex items-center w-full px-4">
        <hr className="w-full text-main" />
        <button className="outline outline-main -outline-offset-1 text-main rounded-full p-2 px-6 text-sm cursor-pointer hover:brightness-125 active:brightness-125 transition-all duration-300 text-nowrap whitespace-nowrap">
          Load more
        </button>
        <hr className="w-full text-main" />
      </div>
    </>
  );
}
