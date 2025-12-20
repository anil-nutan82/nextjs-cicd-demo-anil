"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/config/tools";

export default function ToolSearch() {
  const [query, setQuery] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-48">
      <input
        placeholder="Search tools"
        className="w-full rounded-md border px-2 py-1 text-sm dark:bg-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div className="absolute top-full z-50 w-full rounded-md border bg-white dark:bg-black">
          {filtered.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
