"use client";
import React, { FormEvent, useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";

export default function ContactForm() {
  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-medium text-xl leading-4 mb-2">
            Contact the Founders Club
          </DialogTitle>
          <DialogDescription className="font-normal text-sm text-neutral-700">
            Let us know any of your concerns or how you feel
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="contact-name"
              className="text-black/60 text-sm w-fit"
            >
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              placeholder="John Doe"
              value={contactValues.name}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="bg-neutral-100 px-3 py-1.5 rounded-lg outline-1 outline-neutral-200 focus:outline-neutral-300 placeholder-neutral-400 focus:placeholder-neutral-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="contact-email"
              className="text-black/60 text-sm w-fit"
            >
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              placeholder="username@example.com"
              value={contactValues.email}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="bg-neutral-100 px-3 py-1.5 rounded-lg outline-1 outline-neutral-200 focus:outline-neutral-300 placeholder-neutral-400 focus:placeholder-neutral-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="contact-message"
              className="text-black/60 text-sm w-fit"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Your message"
              value={contactValues.message}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              className="bg-neutral-100 px-3 py-1.5 rounded-lg outline-1 outline-neutral-200 focus:outline-neutral-300 placeholder-neutral-400 focus:placeholder-neutral-300"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button
                className="bg-black text-sm px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out w-fit"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #000000 0%, #555555 100%)",
                }}
              >
                Cancel
              </button>
            </DialogClose>
            <button
              className="bg-main text-sm px-5 py-2 rounded-xl text-white cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:pointer-events-none w-fit"
              style={{
                backgroundImage:
                  "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
              }}
              type="submit"
              disabled={
                !contactValues.name ||
                !contactValues.email ||
                !contactValues.message
              }
            >
              Submit
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
