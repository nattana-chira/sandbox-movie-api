import { NotFoundException } from '@nestjs/common';

export class MovieNotFoundException extends NotFoundException {
  constructor(movieId: string | number) {
    super(`Movie with ID ${movieId} not found.`);
  }
}