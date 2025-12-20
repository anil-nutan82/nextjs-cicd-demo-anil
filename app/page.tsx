"use client"
import Link from "next/link";
import { tools } from "@/config/tools";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <div className="mb-14 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Simple, Fast Online Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculator, converters, and more — all in one place.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border p-6 transition hover:shadow-md dark:border-gray-800"
          >
            <h2 className="mb-2 text-lg font-semibold">{tool.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Open {tool.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
