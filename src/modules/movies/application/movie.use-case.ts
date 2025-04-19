import { Inject, Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/movie-repository';

@Injectable()
export class MovieUseCase {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private readonly movieRepo: MovieRepository
  ) {}

  async getMovies() {
    const data = await this.movieRepo.getMovies();
    return data.results;
  }

  async getDetails(id: string) {
    const data = await this.movieRepo.getDetails(id);
    return data;
  }
}