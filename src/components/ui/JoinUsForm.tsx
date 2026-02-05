"use client";
import React, { useEffect, useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { toast } from "sonner";

export default function JoinUsForm() {
  const [registerValues, setRegisterValues] = useState({ name: "", email: "" });
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [registerCount, setRegisterCount] = useState<number | null>(null);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const registeredEmailCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("registeredEmail="),
    );
    if (registeredEmailCookie) {
      const email = registeredEmailCookie.split("=")[1];
      setRegisteredEmail(decodeURIComponent(email));
    } else {
      const fetchRegisterCount = async () => {
        const res = await fetch("/api/register", {
          method: "GET",
        });
        const { data, error } = JSON.parse(await res.json());
        if (error) {
          toast.error("An error occurred", {
            description: "Failed to fetch register user count.",
          });
          return;
        }
        setRegisterCount(data);
      };
      fetchRegisterCount();
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerValues),
    });
    if (res.ok) {
      document.cookie = `registeredEmail=${registerValues.email};`;
      setRegisteredEmail(registerValues.email);
      setRegisterValues({ name: "", email: "" });
      toast.success("Successfully registered to the club!");
    } else {
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-medium text-xl leading-4 mb-2">
            Join the Founders Club
          </DialogTitle>
          <DialogDescription className="font-normal text-sm text-neutral-700">
            {registeredEmail
              ? `You've already registered with: ${registeredEmail}`
              : registerCount
                ? `Join over ${registerCount} other like-minded students who have already registered`
                : "Loading..."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="register-name"
              className="text-black/60 text-sm w-fit"
            >
              Name
            </label>
            <input
              type="text"
              id="register-name"
              placeholder="John Doe"
              value={registerValues.name}
              onChange={(e) =>
                setRegisterValues((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="bg-neutral-100 px-3 py-1.5 rounded-lg outline-1 outline-neutral-200 focus:outline-neutral-300 placeholder-neutral-400 focus:placeholder-neutral-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="register-email"
              className="text-black/60 text-sm w-fit"
            >
              Email
            </label>
            <input
              type="email"
              id="register-email"
              placeholder="username@example.com"
              value={registerValues.email}
              onChange={(e) =>
                setRegisterValues((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="bg-neutral-100 px-3 py-1.5 rounded-lg outline-1 outline-neutral-200 focus:outline-neutral-300 placeholder-neutral-400 focus:placeholder-neutral-300"
            />
          </div>
          <small className="text-neutral-500 italic">
            If you’ve attended one of our events, no registration is required.
          </small>
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
              disabled={!!registeredEmail}
            >
              Join
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
}
