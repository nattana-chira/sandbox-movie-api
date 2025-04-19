import { Paginated } from "src/modules/common/domain/paginated.entity";
import { Movie } from "./entity/Movie"

export interface MovieRepository {
  getPopular(): Promise<Paginated<Movie>>;
}