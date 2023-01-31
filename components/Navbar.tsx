"use client";

import Link from "next/link";
import cn from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const IS_ANIME = pathname?.includes("anime");
  return (
    <nav>
      <Link
        className={cn(
          pathname ? "decoration-orange-600" : "decoration-blue-600",
          "text-gray-200 text-xl hover:underline hover:text-yellow-50"
        )}
        href={IS_ANIME ? "/" : "/anime"}
      >
        Switch to {IS_ANIME ? "Manga" : "Anime"}
      </Link>
    </nav>
  );
}
