"use client";

import { Data } from "@/types/Manga";
import Image from "next/image";

type TProps = {
  currentManga: Data;
};

export default function MangaInfo({ currentManga }: TProps) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <a
        href={currentManga.url}
        rel="noreferrer"
        target={"_blank"}
        className="text-6xl hover:underline decoration-blue-600 transition-all"
      >
        {currentManga.title}
      </a>
      <span className="text-2xl">Score: {currentManga.score ?? "??"}</span>
      <Image
        width={192}
        height={273}
        className="w-auto rounded-xl"
        alt={currentManga.title}
        src={currentManga?.images.jpg.large_image_url}
      />
    </div>
  );
}
