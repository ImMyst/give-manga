import { Manga } from "@/types/Manga";
import { Anime } from "@/types/Anime";

type TRandomSearch = "manga" | "anime";

export const getRandom = async <T extends TRandomSearch>(
  type: T
): Promise<T extends "manga" ? Manga : Anime> => {
  const res = await fetch(`${`https://api.jikan.moe/v4/random/${type}`}`);
  const data = await res.json();

  return data as T extends "manga" ? Manga : Anime;
};
