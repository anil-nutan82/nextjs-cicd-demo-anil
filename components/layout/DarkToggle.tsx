"use client";

import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkToggle() {
  const { dark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="rounded-md border px-2 py-1 text-sm"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
