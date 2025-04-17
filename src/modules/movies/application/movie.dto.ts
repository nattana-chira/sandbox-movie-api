export class MovieDto {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  voteAverage: number;

  constructor(movie: any) {
    this.id = movie.id;
    this.title = movie.title;
    this.overview = movie.overview;
    this.releaseDate = movie.release_date;
    this.posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    this.backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    this.voteAverage = movie.vote_average;
  }
}