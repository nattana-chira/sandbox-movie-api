import { Inject, Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/movie-repository';

@Injectable()
export class MovieUseCase {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private readonly movieRepo: MovieRepository
  ) {}

  async getMovies() {
    const data = await this.movieRepo.getPopular();
    return data.results;
  }
}