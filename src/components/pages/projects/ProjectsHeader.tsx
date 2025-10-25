"use client";
import Heading from "@/components/ui/Heading";
import PopUp from "@/components/ui/PopUp";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";

export default function ProjectsHeader() {
  const [searchOpened, setSearchOpened] = useState(false);
  const [search, setSearch] = useState("");
  const [projectValues, setProjectValues] = useState<{
    title: string;
    description: string;
    tags: string[];
    banner: File | null;
    logo: File | null;
  }>({ title: "", description: "", tags: [], banner: null, logo: null });
  const [currentTag, setCurrentTag] = useState("");

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setProjectValues((prev) => ({ ...prev, [id]: file }));
    }
    e.target.value = "";
  };

  console.log(projectValues);

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
              <PopUp
                content={(togglePopUp) => (
                  <>
                    <header className="flex items-center justify-between gap-8 mb-1.5">
                      <h3 className="text-xl text-charcoal font-semibold">
                        Add your project:
                      </h3>
                      <button
                        onClick={togglePopUp}
                        className="text-red-500 hover:saturate-75 text-xl cursor-pointer"
                      >
                        <AiOutlineClose aria-label="Close pop up" />
                      </button>
                    </header>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                      className="flex flex-col gap-2"
                    >
                      <hr className="opacity-20" />
                      <div className="flex flex-col gap-1 w-full">
                        <label
                          htmlFor="project-title"
                          className="text-black/60 w-fit"
                        >
                          Project title:
                        </label>
                        <input
                          type="text"
                          id="project-title"
                          placeholder="Enter title..."
                          value={projectValues.title}
                          onChange={(e) =>
                            setProjectValues((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          className="bg-white rounded-md p-2 hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 focus:outline-main/50 outline-transparent outline -outline-offset-1"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <label
                          htmlFor="project-description"
                          className="text-black/60 w-fit"
                        >
                          Project description:
                        </label>
                        <textarea
                          id="project-description"
                          placeholder="Enter description..."
                          value={projectValues.description}
                          onChange={(e) =>
                            setProjectValues((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          className="bg-white rounded-md p-2 hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 focus:outline-main/50 outline-transparent outline -outline-offset-1"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <label
                          htmlFor="project-tags"
                          className="text-black/60 w-fit"
                        >
                          Project tags:
                        </label>
                        <div className="flex w-full gap-2 mb-1">
                          <input
                            type="text"
                            id="project-tags"
                            placeholder="Enter Tags..."
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            className="bg-white rounded-md p-2 hover:placeholder:text-black/60 focus:placeholder:text-black/25 placeholder:text-black/40 focus:outline-main/50 outline-transparent outline -outline-offset-1 w-full"
                          />
                          <button
                            type="button"
                            className="bg-main hover:bg-main/80 active:bg-main/80 p-2 rounded-md text-white size-10 text-lg cursor-pointer transition-all duration-300"
                            onClick={() => {
                              setProjectValues((prev) => ({
                                ...prev,
                                tags: [...prev.tags, currentTag],
                              }));
                              setCurrentTag("");
                            }}
                          >
                            <IoMdAdd className="m-auto" />
                          </button>
                        </div>
                        {projectValues.tags.length ? (
                          <div className="flex items-center gap-2 flex-nowrap overflow-x-auto no-scrollbar">
                            {projectValues.tags.map((tag, index) => (
                              <span
                                className="flex items-center gap-1 w-fit bg-neutral-200 px-2 py-1 rounded-md text-xs text-nowrap whitespace-nowrap"
                                key={index}
                              >
                                {tag}
                                <button
                                  className="cursor-pinter"
                                  type="button"
                                  onClick={() =>
                                    setProjectValues((prev) => ({
                                      ...prev,
                                      tags: [...prev.tags.splice(index, 1)],
                                    }))
                                  }
                                >
                                  <IoMdClose />
                                </button>
                              </span>
                            ))}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-black/60 w-fit mb-1">
                            Project banner:
                          </p>
                          {projectValues.banner ? (
                            <div className="bg-neutral-200 p-2 flex items-center justify-between gap-2 rounded-md">
                              <div>
                                <p className="italic">
                                  {projectValues.banner.name}
                                </p>
                              </div>
                              <button
                                className="cursor-pointer"
                                onClick={() =>
                                  setProjectValues((prev) => ({
                                    ...prev,
                                    banner: null,
                                  }))
                                }
                              >
                                <IoMdClose />
                              </button>
                            </div>
                          ) : (
                            <label htmlFor="banner">
                              <div className="group outline-dashed bg-main/5 text-main outline-main outline-2 -outline-offset-2 rounded-md flex items-center justify-center flex-col p-2 font-medium transition-colors transition-bg duration-300 cursor-pointer col-span-2">
                                <LuUpload className="text-3xl text-main transition-all duration-300" />
                                <span className="text-xs text-center">
                                  Upload Banner
                                </span>
                              </div>
                            </label>
                          )}
                          <input
                            type="file"
                            id="banner"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              handleFileChange(e, e.target.id);
                              e.target.value = "";
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-black/60 w-fit mb-1">
                            Project logo:
                          </p>
                          {projectValues.logo ? (
                            <div className="bg-neutral-200 p-2 flex items-center justify-between gap-2 rounded-md">
                              <div>
                                <p className="italic">
                                  {projectValues.logo.name}
                                </p>
                              </div>
                              <button
                                className="cursor-pointer"
                                onClick={() =>
                                  setProjectValues((prev) => ({
                                    ...prev,
                                    logo: null,
                                  }))
                                }
                              >
                                <IoMdClose />
                              </button>
                            </div>
                          ) : (
                            <label htmlFor="logo">
                              <div className="group outline-dashed bg-main/5 text-main outline-main outline-2 -outline-offset-2 rounded-md flex items-center justify-center flex-col p-2 font-medium transition-colors transition-bg duration-300 cursor-pointer col-span-2">
                                <LuUpload className="text-3xl text-main transition-all duration-300" />
                                <span className="text-xs text-center">
                                  Upload Logo
                                </span>
                              </div>
                            </label>
                          )}
                          <input
                            type="file"
                            id="logo"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              handleFileChange(e, e.target.id);
                              e.target.value = "";
                            }}
                          />
                        </div>
                      </div>
                      <hr className="opacity-20" />
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="outline outline-main -outline-offset-1 text-main py-2 px-4 rounded-full cursor-pointer transition-all duration-300"
                          type="button"
                          onClick={togglePopUp}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-main hover:bg-main/80 active:bg-main/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </>
                )}
                trigger={
                  <>
                    <IoMdAdd />
                  </>
                }
                triggerContainerCN="bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-200 rounded-full text-xl p-2 cursor-pointer transition-all duration-300"
              />
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
