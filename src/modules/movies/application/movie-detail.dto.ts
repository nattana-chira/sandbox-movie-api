export interface MovieDetailsResponse {
  adult: boolean;
  backdropPath: string;
  // genres: Genre[];
  id: number;
  imdbId: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  status: string;
  title: string;
  voteAverage: number;
  voteCount: number;
}

export type MovieDetails = {
  year: number;
  totalSeasons: number;
  audienceAge: string;
  adultTags: string[];
  casts: string[];
  genre: string[];
  emotions: string[];
};

