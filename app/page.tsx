"use client";

import { useState } from "react";
import Button from "@/components/Button";
import MangaInfo from "@/components/MangaInfo";
import { isGenreIncluded } from "@/utils/isGenreIncluded";
import { getRandom } from "@/utils/getRandom";
import type { MangaData } from "@/types/Manga";

export default function Home() {
  const [currentManga, setCurrentManga] = useState<MangaData | null>(null);

  const getRandomManga = async () => {
    const mangaData = await getRandom("manga");

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
