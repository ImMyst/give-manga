"use client";

import { useState } from "react";
import Button from "@/components/Button";
import AnimeInfo from "@/components/AnimeInfo";
import { isGenreIncluded } from "@/utils/isGenreIncluded";
import { getRandom } from "@/utils/getRandom";
import type { AnimeData } from "@/types/Anime";

export default function Home() {
  const [currentAnime, setCurrentAnime] = useState<AnimeData | null>(null);

  const getRandomAnime = async () => {
    const animeData = await getRandom("anime");

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
