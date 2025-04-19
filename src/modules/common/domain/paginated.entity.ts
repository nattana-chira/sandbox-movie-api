export class Paginated<T> {
  constructor(
    public readonly page: number,
    public readonly results: T[],
    public readonly totalPages: number,
    public readonly totalResults: number
  ) {}
}