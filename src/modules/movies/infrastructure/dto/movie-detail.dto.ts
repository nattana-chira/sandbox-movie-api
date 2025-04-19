import { MovieDetailsResponse } from "../movie-api.type";
import { MovieDto } from "./movie.dto";

interface Genre {
  id: number
  name: string;
}

interface Episode {
  id: number;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
};

export class MovieDetailDto extends MovieDto {
  genres: Genre[];
  imdbId: string;
  originCountry: string[];
  popularity: number;
  status: string;
  tagline: string;
  voteCount: number;

  year: number;
  totalSeasons: number;
  audienceAge: string;
  adultTags: string[];
  casts: string[];
  genre: string[];
  emotions: string[];

  episodes: Episode[];

  constructor(detail: MovieDetailsResponse) {
    super(detail)

    this.genres = detail.genres;
    this.imdbId = detail.imdb_id;
    this.originCountry = detail.origin_country;
    this.popularity = detail.popularity;
    this.status = detail.status;
    this.tagline = detail.tagline;
    this.voteCount = detail.vote_count;
  }
}