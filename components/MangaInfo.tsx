import Image from "next/image";
import { truncate } from "@/utils/truncate";
import type { MangaData } from "@/types/Manga";

type TProps = {
  currentManga: MangaData;
};

export default function MangaInfo({ currentManga }: TProps) {
  const genres =
    currentManga.genres && currentManga.genres.length > 0
      ? currentManga.genres
          .map((genre, index) => (index ? ", " : "") + genre.name)
          .join("")
      : "?";

  const firstDemographic =
    currentManga.demographics && currentManga.demographics.length > 0
      ? currentManga.demographics[0].name
      : "?";

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <a
        href={currentManga.url}
        rel="noreferrer"
        target={"_blank"}
        className="text-6xl hover:underline decoration-blue-600 transition-all"
      >
        {truncate(currentManga.title, 53)}
      </a>
      <section className="text-3xl flex md:max-w-md max-w-sm text-center justify-center items-center flex-col">
        <span>
          Score :{" "}
          <span className="text-yellow-200">{currentManga.score ?? "?"}</span>
        </span>
        <span>
          Type :{" "}
          <span className="text-yellow-200">{currentManga.type ?? "?"}</span>
        </span>
        <span>
          Published :{" "}
          <span className="text-yellow-200">
            {currentManga.published.string}
          </span>
        </span>
        <span className="whitespace-wrap">
          Genres : <span className="text-yellow-200">{genres}</span>
        </span>
        <span>
          Demographic :{" "}
          <span className="text-yellow-200">{firstDemographic}</span>
        </span>
      </section>
      <Image
        width={192}
        height={273}
        className="w-auto border-2 border-yellow-50 rounded-xl"
        alt={currentManga.title}
        src={currentManga?.images.jpg.large_image_url}
      />
    </div>
  );
}
