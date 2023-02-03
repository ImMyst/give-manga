"use client";

import Button from "@/components/Button";
import { useState } from "react";
import AnimeInfo from "@/components/AnimeInfo";
import type { AnimeData, Anime } from "@/types/Anime";
import { isGenreIncluded } from "@/utils/isGenreIncluded";

export default function Home() {
  const [currentAnime, setCurrentAnime] = useState<AnimeData | null>(null);

  const getRandomAnime = async () => {
    const res = await fetch("https://api.jikan.moe/v4/random/anime");
    const data = res.json();
    const animeData: Anime = await data;

    if (!animeData) return;

    // Re run getRandomAnime if genre is hentai
    if (!isGenreIncluded(animeData.data?.genres, ["Hentai"])) {
      setCurrentAnime(animeData.data);
    } else {
      await getRandomAnime();
    }
  };

  return (
    <>
      {currentAnime && <AnimeInfo currentAnime={currentAnime} />}
      <Button isAnime={true} onClick={getRandomAnime}>
        Give me an Anime!
      </Button>
    </>
  );
}
