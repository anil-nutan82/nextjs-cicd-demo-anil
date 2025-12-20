"use client";

import { useState } from "react";
import Navigation from "./Navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute left-0 top-16 w-full bg-white dark:bg-black border-b p-4 md:hidden">
          <Navigation onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
