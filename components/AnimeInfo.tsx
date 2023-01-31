import { AnimeData } from "types/Anime";
import Image from "next/image";
import { truncate } from "utils/truncate";

type TProps = {
  currentAnime: AnimeData;
};

export default function AnimeInfo({ currentAnime }: TProps) {
  const genres =
    currentAnime.genres && currentAnime.genres.length > 0 ? (
      currentAnime.genres.map((genre, index) => (
        <span className="text-yellow-200" key={index}>
          {(index ? ", " : "") + genre.name}
        </span>
      ))
    ) : (
      <span className="text-yellow-200">?</span>
    );

  const firstDemographic =
    currentAnime.demographics && currentAnime.demographics.length > 0
      ? currentAnime.demographics[0].name
      : "?";

  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <a
        href={currentAnime.url}
        rel="noreferrer"
        target={"_blank"}
        className="text-6xl hover:underline decoration-orange-600 transition-all"
      >
        {truncate(currentAnime.title, 53)}
      </a>
      <section className="text-3xl flex max-w-xs text-center whitespace-nowrap justify-center items-center flex-col">
        <span>
          Score :{" "}
          <span className="text-yellow-200">{currentAnime.score ?? "?"}</span>
        </span>
        <span>
          Type :{" "}
          <span className="text-yellow-200">{currentAnime.type ?? "?"}</span>
        </span>
        <span>
          Aired :{" "}
          <span className="text-yellow-200">{currentAnime.aired.string}</span>
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
        alt={currentAnime.title}
        src={currentAnime?.images.jpg.large_image_url}
      />
    </div>
  );
}
