import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  apiUrl: process.env.MOVIE_API_URL,
  apiKey: process.env.MOVIE_API_TOKEN,
}));