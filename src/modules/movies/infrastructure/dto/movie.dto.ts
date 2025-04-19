import { Movie } from "../../domain/entity/Movie";
import { MovieData, MovieDetailsResponse } from "../movie-api.type";

export class MovieDto {
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  voteAverage: number;

  constructor(movie: MovieData | MovieDetailsResponse) {
    this.id = movie.id;
    this.title = movie.title;
    this.overview = movie.overview;
    this.releaseDate = movie.release_date;
    this.posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    this.backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    this.voteAverage = movie.vote_average;
  }

  public static fromArray(movies: MovieData[]): MovieDto[] {
    return movies.map(movie => new MovieDto(movie))
  }

  public static toEntityArray(movies: MovieData[]) {
    return MovieDto.fromArray(movies)
      .map(movie => new Movie(
        movie.id,
        movie.title,
        movie.overview,
        movie.releaseDate,
        movie.posterUrl,
        movie.backdropUrl,
        movie.voteAverage
      ))
  }
}