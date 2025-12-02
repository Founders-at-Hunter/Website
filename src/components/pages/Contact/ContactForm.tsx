"use client";
import { useState } from "react";
import { toast } from "sonner";

const DEFAULT_CONTACT_VALUES = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contactValues, setContactValues] = useState(DEFAULT_CONTACT_VALUES);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // HANDLE FORM SUBMISSION (SAVE TO DB + RESEND EMAIL FUNCTIONALITY)
    setContactValues(DEFAULT_CONTACT_VALUES);
    toast.success("Message submitted successfully.", {
      description: "You'll hear back within 3-5 business days.",
    });
  };
  return (
    <div className="flex justify-center items-center px-10 min-h-[100dvh] py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-items-center">
        <aside className="sm:hidden block">
          <img
            src="/team.jpg"
            alt="Contact"
            className="saturate-0 rounded-lg"
          />
        </aside>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <header>
            <h1 className="text-xl font-medium">Talk to Us:</h1>
            <p className="text-black/40 mb-3 text-xs">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </header>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="contact-name"
              className="text-black/60 font-light text-xs"
            >
              Your name:
            </label>
            <input
              type="text"
              id="contact-name"
              placeholder="Enter name..."
              value={contactValues.name}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
              className="bg-white rounded-md p-2 hover:placeholder:text-black/40 hover:outline-black/20 focus:placeholder:text-black/25 placeholder:text-black/25 focus:outline-main/60 focus:outline-dashed outline-black/10 outline -outline-offset-1 text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="contact-email"
              className="text-black/60 font-light text-xs"
            >
              Your email:
            </label>
            <input
              type="email"
              id="contact-email"
              placeholder="Enter email..."
              value={contactValues.email}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
              className="bg-white rounded-md p-2 hover:placeholder:text-black/40 hover:outline-black/20 focus:placeholder:text-black/25 placeholder:text-black/25 focus:outline-main/60 focus:outline-dashed outline-black/10 outline -outline-offset-1 text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 w-full mb-3">
            <label
              htmlFor="contact-message"
              className="text-black/60 font-light text-xs"
            >
              Your message:
            </label>
            <textarea
              id="contact-message"
              placeholder="Enter message..."
              value={contactValues.message}
              onChange={(e) =>
                setContactValues((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
              className="bg-white rounded-md p-2 hover:placeholder:text-black/40 hover:outline-black/20 focus:placeholder:text-black/25 placeholder:text-black/25 focus:outline-main/60 focus:outline-dashed outline-black/10 outline -outline-offset-1 text-xs h-32"
            />
          </div>
          <div className="flex items-center justify-end">
            <button className="bg-black hover:bg-black/80 hover:outline-black/80 active:bg-black/80 active:outline-black/80 py-2 px-4 rounded-full text-white cursor-pointer transition-all duration-300 outline-2 outline-transparent outline-offset-2 opacity-100 visible text-sm">
              Submit
            </button>
          </div>
        </form>
        <aside className="sm:block hidden">
          <img
            src="/team.JPG"
            alt="Contact"
            className="saturate-0 rounded-lg"
          />
        </aside>
      </div>
    </div>
  );
}
