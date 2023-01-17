import MangaInfo from "@/components/MangaInfo";
import Inter from "@next/font/google";

export default function Home() {
  return (
    <main>
      <MangaInfo />
      <button className="bg-blue-600 text-blue-300 hover:text-yellow-50 text-3xl rounded-md px-4 py-4">
        Give me a manga!
      </button>
    </main>
  );
}
