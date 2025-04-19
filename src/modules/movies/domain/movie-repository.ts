import { Paginated } from "src/modules/common/domain/paginated.entity";
import { Movie } from "./entity/Movie"
import { MovieDetails } from "./entity/MovieDetail";

export interface MovieRepository {
  getMovies(): Promise<Paginated<Movie>>;
  getDetails(id: string): Promise<MovieDetails>;
}