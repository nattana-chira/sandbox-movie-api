import { Module } from '@nestjs/common';
import { MovieController } from './presentation/movie.controller';
import { MovieApiService } from './infrastructure/movie-api.service';
import { MovieService } from './application/movie.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieApiService, MovieService]
})
export class MovieModule {}