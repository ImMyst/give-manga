export interface Manga {
  data: MangaData;
}
export interface MangaData {
  mal_id: number;
  url: string;
  images: Images;
  approved: boolean;
  titles?: TitlesEntity[] | null;
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors?: AllTypes[] | null;
  serializations?: AllTypes[] | null;
  genres?: AllTypes[] | null;
  explicit_genres?: AllTypes[] | null;
  themes?: AllTypes[] | null;
  demographics?: AllTypes[] | null;
}
interface Images {
  jpg: JpgOrWebp;
  webp: JpgOrWebp;
}
interface JpgOrWebp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}
interface TitlesEntity {
  type: string;
  title: string;
}
interface Published {
  from: string;
  to: string;
  prop: Prop;
  string: string;
}
interface Prop {
  from: FromOrTo;
  to: FromOrTo;
  string: string;
}
interface FromOrTo {
  day: number;
  month: number;
  year: number;
}
export interface AllTypes {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
