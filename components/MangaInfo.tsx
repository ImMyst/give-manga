import { MangaData } from "types/Manga";
import Image from "next/image";
import { truncate } from "utils/truncate";

type TProps = {
  currentManga: MangaData;
};

export default function MangaInfo({ currentManga }: TProps) {
  const genres =
    currentManga.genres && currentManga.genres.length > 0 ? (
      currentManga.genres.map((genre, index) => (
        <span className="text-yellow-200" key={index}>
          {(index ? ", " : "") + genre.name}
        </span>
      ))
    ) : (
      <span className="text-yellow-200">?</span>
    );

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
      <section className="text-3xl flex max-w-xs text-center whitespace-nowrap justify-center items-center flex-col">
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
        <span>Genres : {genres}</span>
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
