"use client";

import Button from "@/components/Button";
import MangaInfo from "@/components/MangaInfo";
import { Data, Manga } from "@/types/Manga";
import { useState } from "react";

export default function Home() {
  const [currentManga, setCurrentManga] = useState<Data | null>(null);

  const getRandomManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/random/manga");
    const data = res.json();
    const mangaData: Manga = await data;

    console.log(mangaData.data);

    if (!mangaData) return;
    setCurrentManga(mangaData.data);
  };

  return (
    <main>
      <MangaInfo currentManga={currentManga} />
      <Button onClick={getRandomManga} />
    </main>
  );
}
