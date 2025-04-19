import { Module } from '@nestjs/common';
import { MovieController } from './presentation/movie.controller';
import { MovieApiService } from './infrastructure/movie-api.service';
import { MovieUseCase } from './application/movie.use-case';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [
    MovieApiService, 
    MovieUseCase,
    {
      provide: 'MOVIE_REPOSITORY',
      useExisting: MovieApiService,
    }
  ]
})
export class MovieModule {}