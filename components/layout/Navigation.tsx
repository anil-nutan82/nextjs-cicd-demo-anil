"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export default function Navigation({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col md:flex-row gap-6">
      {navigation.main.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`text-sm font-medium ${
              active ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
