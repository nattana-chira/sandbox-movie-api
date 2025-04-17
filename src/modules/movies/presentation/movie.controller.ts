import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../application/movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies() {
    return this.movieService.getMovies();
  }
}