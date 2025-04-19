import { Movie } from "./Movie";

interface Genre {
  id: number
  name: string;
};

interface Episode {
  id: number;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
};

export class MovieDetails extends Movie {
  year: number;
  totalSeasons: number;
  audienceAge: string;
  adultTags: string[];
  casts: string[];
  genres: Genre[];
  emotions: string[];

  imdbId: string;
  originCountry: string[];
  popularity: number;
  status: string;
  tagline: string;
  voteCount: number;

  episodes: Episode[];
};