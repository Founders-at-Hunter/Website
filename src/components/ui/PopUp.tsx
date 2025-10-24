"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PopUp({
  trigger,
  triggerContainerCN,
  content,
}: {
  trigger: React.ReactNode;
  triggerContainerCN?: string;
  content: (togglePopUp: () => void) => React.ReactNode;
}) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [popUpOpened, setPopUpOpened] = useState(false);
  const [render, setRender] = useState(false);

  const togglePopUp = () => {
    setPopUpOpened((prev) => !prev);
  };

  useEffect(() => {
    // Remove pop up from DOM when PopUp Closed
    let timeout: NodeJS.Timeout;
    if (popUpOpened) {
      setRender(true);
    } else {
      timeout = setTimeout(() => setRender(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [popUpOpened]);

  useEffect(() => {
    const el = document.getElementById("portal-root");
    setPortalRoot(el);
  }, []);

  return (
    <>
      {portalRoot &&
        createPortal(
          render ? (
            <>
              <section
                className={`p-6 bg-white/85 backdrop-blur-lg backdrop-saturate-200 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl z-[500] transition-all duration-500 md:max-w-2xl w-4/5 ${
                  popUpOpened
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              >
                {content(togglePopUp)}
              </section>
              <div
                className={`w-full h-full backdrop-blur-sm fixed bg-black/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[499] transition-all duration-500 ${
                  popUpOpened ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={togglePopUp}
              />
            </>
          ) : null,
          portalRoot
        )}
      <button onClick={togglePopUp} className={triggerContainerCN ?? ""}>
        {trigger}
      </button>
    </>
  );
}
