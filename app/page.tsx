"use client";

import Button from "@/components/Button";
import MangaInfo from "@/components/MangaInfo";
import { useState } from "react";
import type { MangaData, Manga } from "@/types/Manga";
import { isGenreIncluded } from "@/utils/isGenreIncluded";

export default function Home() {
  const [currentManga, setCurrentManga] = useState<MangaData | null>(null);

  const getRandomManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/random/manga");
    const data = res.json();
    const mangaData: Manga = await data;

    if (!mangaData) return;

    // Re run getRandomManga if genre is hentai
    if (!isGenreIncluded(mangaData.data?.genres, ["Hentai"])) {
      setCurrentManga(mangaData.data);
    } else {
      await getRandomManga();
    }
  };

  return (
    <>
      {currentManga && <MangaInfo currentManga={currentManga} />}
      <Button onClick={getRandomManga}>Give me a Manga!</Button>
    </>
  );
}
