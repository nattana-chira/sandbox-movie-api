import { Controller, Get, Param } from '@nestjs/common';
import { MovieUseCase } from '../application/movie.use-case';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieUseCase: MovieUseCase) {}

  @Get()
  async getMovies() {
    return await this.movieUseCase.getMovies();
  }

  @Get(':id')
  async getMovieDetails(@Param('id') id: string) {
    return await this.movieUseCase.getDetails(id);
  }
}