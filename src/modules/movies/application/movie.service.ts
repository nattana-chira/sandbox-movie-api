import { Injectable } from '@nestjs/common';
import { MovieApiService } from '../infrastructure/movie-api.service';
import { MovieDto } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly movieApiService: MovieApiService) {}

  async getMovies() {
    const data = await this.movieApiService.fetchMovies();
    return data.results.map(movie => new MovieDto(movie));
  }
}