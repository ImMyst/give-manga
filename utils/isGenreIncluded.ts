import { AllTypes } from "@/types/Common";

export const isGenreIncluded = (
  genres: AllTypes[] | undefined | null,
  genreToExclude: string[]
) => {
  return genres
    ? genres.every((genre) => genreToExclude.includes(genre.name))
    : true;
};
