import Link from "next/link";
import { tools } from "@/config/tools";

export default function ToolSwitcher() {
  return (
    <div className="flex gap-4">
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          className="text-sm text-blue-600 hover:underline"
        >
          {tool.name}
        </Link>
      ))}
    </div>
  );
}
