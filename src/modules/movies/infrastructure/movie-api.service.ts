import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { MovieApiGetPopularResponse, MovieDetailsResponse } from './movie-api.type';
import { mockMovieDetails } from './movie-api.mock';
import { MovieRepository } from '../domain/movie-repository'
import { Movie } from '../domain/entity/Movie';
import { Paginated } from 'src/modules/common/domain/paginated.entity';
import { MovieDto } from './dto/movie.dto';
import { MovieDetails } from '../domain/entity/MovieDetail';
import { MovieNotFoundException } from './exception/movie-not-found.exception';
import { MovieDetailDto } from './dto/movie-detail.dto';

@Injectable()
export class MovieApiService implements MovieRepository {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    const config = this.configService.get('app');
    this.apiUrl = config.apiUrl;
    this.apiKey = config.apiKey;
  }

  async getMovies(): Promise<Paginated<Movie>> {
    const response = await axios.get<MovieApiGetPopularResponse>(this.apiUrl + '/discover/movie', {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc'
      }
    });

    return {
      page: response.data.page,
      results: MovieDto.toEntityArray(response.data.results),
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results
    }
  }

  async getDetails(id: string): Promise<MovieDetails> {
    try {
      const response = await axios.get<MovieDetailsResponse>(this.apiUrl + `/movie/${id}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        },
        params: {
          language: 'en-US',
        }
      });
      const dto = new MovieDetailDto(response.data)
  
      return {
        ...mockMovieDetails,
        id: dto.id,
        title: dto.title,
        overview: dto.overview,
        posterUrl: dto.posterUrl,
        backdropUrl: dto.backdropUrl,
        genres: dto.genres
      }
    } catch (e) {
      throw new MovieNotFoundException(id)
    }
  }
}