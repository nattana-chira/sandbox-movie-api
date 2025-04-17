import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { MovieApiResponse } from './movie-api-response.interface';

@Injectable()
export class MovieApiService {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(private configService: ConfigService) {
    const config = this.configService.get('app');
    this.apiUrl = config.apiUrl;
    this.apiKey = config.apiKey;
  }

  async fetchMovies(): Promise<MovieApiResponse> {
    const response = await axios.get<MovieApiResponse>(this.apiUrl, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
        with_genres: '28'
      },
    });

    return response.data;
  }
}