import { Genres, GenreName } from "@/types/Common";

export const isGenreIncluded = (
  genres: Genres[] | undefined | null,
  genreToExclude: GenreName[]
) => {
  return genres
    ? genres.every((genre) => genreToExclude.includes(genre.name))
    : true;
};
