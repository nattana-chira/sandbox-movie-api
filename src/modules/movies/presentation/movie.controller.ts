import { Controller, Get } from '@nestjs/common';
import { MovieUseCase } from '../application/movie.use-case';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieUseCase: MovieUseCase) {}

  @Get()
  async getMovies() {
    return this.movieUseCase.getMovies();
  }
}