"use client";

import Button from "components/Button";
import { AnimeData, Anime } from "types/Anime";
import { useState } from "react";
import About from "components/About";
import AnimeInfo from "components/AnimeInfo";

export default function Home() {
  const [currentAnime, setCurrentAnime] = useState<AnimeData | null>(null);

  const getRandomManga = async () => {
    const res = await fetch("https://api.jikan.moe/v4/random/anime");
    const data = res.json();
    const animeData: Anime = await data;

    console.log(animeData.data);

    if (!animeData) return;
    setCurrentAnime(animeData.data);
  };

  return (
    <>
      {currentAnime && <AnimeInfo currentAnime={currentAnime} />}
      <Button isAnime onClick={getRandomManga}>
        Give me an Anime!
      </Button>
      <About />
    </>
  );
}
