import { AllTypes, Genres } from "@/types/Common";

export interface Anime {
  data: AnimeData;
}

export interface AnimeData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: AllTypes[];
  licensors: AllTypes[];
  studios: AllTypes[];
  genres: Genres[];
  explicit_genres: AllTypes[];
  themes: AllTypes[];
  demographics: AllTypes[];
}

interface Images {
  jpg: Jpg;
  webp: Webp;
}

interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from: string;
  to: string;
  string: string;
  prop: Prop;
}

interface Prop {
  from: From;
  to: To;
  string: string;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface To {
  day: number;
  month: number;
  year: number;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}
