"use client";

import Link from "next/link";
import cn from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const IS_ANIME = pathname?.includes("anime");

  return (
    <header className="w-full h-full py-6">
      <Link
        className={cn(
          IS_ANIME ? "decoration-blue-600" : "decoration-orange-600",
          "text-gray-200 text-2xl hover:underline hover:text-yellow-50"
        )}
        href={IS_ANIME ? "/" : "/anime"}
      >
        Switch to{" "}
        {IS_ANIME ? (
          <span className="text-blue-300">Manga</span>
        ) : (
          <span className="text-orange-300">Anime</span>
        )}
      </Link>
    </header>
  );
}
