"use client";

import Button from "components/Button";
import MangaInfo from "components/MangaInfo";
import { MangaData, Manga } from "types/Manga";
import { useState } from "react";
import About from "components/About";

export default function Home() {
  const [currentManga, setCurrentManga] = useState<MangaData | null>(null);

  const getRandomManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/random/manga");
    const data = res.json();
    const mangaData: Manga = await data;

    if (!mangaData) return;
    setCurrentManga(mangaData.data);
  };

  return (
    <>
      {currentManga && <MangaInfo currentManga={currentManga} />}
      <Button onClick={getRandomManga}>Give me a Manga!</Button>
      <About />
    </>
  );
}
