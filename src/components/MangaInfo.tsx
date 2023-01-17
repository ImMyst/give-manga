"use client";

import { Data } from "@/types/Manga";

type TProps = {
  currentManga: Data | null;
};

export default function MangaInfo({ currentManga }: TProps) {
  return (
    <div>
      <img
        src={currentManga?.images.jpg.large_image_url}
        className="w-48"
        alt={currentManga?.title}
      />
      <span>{currentManga?.title}</span>
    </div>
  );
}
