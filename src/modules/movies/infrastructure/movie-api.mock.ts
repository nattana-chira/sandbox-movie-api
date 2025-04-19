import { MovieDetails } from "../domain/entity/MovieDetail";

const mockEpisodes = [
  {
    id: 1,
    number: 25,
    title: "Maomao and Maomao",
    duration: "24m",
    thumbnail: "/images/ep25.jpg",
    description: "The ladies of the inner palace develop a keen interest in novels. Maomao joins Gyokuyou and her daughter Lingli for a walk and makes a new friend."
  },
  {
    id: 2,
    number: 26,
    title: "The Caravan",
    duration: "24m",
    thumbnail: "/images/ep26.jpg",
    description: "A caravan selling foreign goods comes to the inner palace. Later, after perfumed oils come into vogue, Maomao notices something odd about their smell."
  },
  {
    id: 3,
    number: 27,
    title: "Corpse Fungus",
    duration: "24m",
    thumbnail: "/images/ep27.jpg",
    description: "At Jinshi's request, Maomao investigates poisonous mushrooms growing near the inner palace. Later, she learns that a mid-ranking concubine has died."
  }
]

export const mockMovieDetails: MovieDetails = {
  id: '101',
  title: "Shadows of the Empire",
  overview:
    "In a city ruled by corruption, a rogue detective uncovers a conspiracy that threatens to bring down the entire government.",
  releaseDate: "2021-11-15",
  posterUrl: "https://image.tmdb.org/t/p/w500/poster-example.jpg",
  backdropUrl: "https://image.tmdb.org/t/p/w500/backdrop-example.jpg",
  voteAverage: 8.4,
  genres: [
    { id: 1, name: "Drama" },
    { id: 2, name: "Thriller" },
    { id: 3, name: "Crime" }
  ],
  imdbId: "tt1234567",
  originCountry: ["US"],
  popularity: 726.4,
  status: "Released",
  tagline: "Justice has a price.",
  voteCount: 1563,

  year: 2021,
  totalSeasons: 2,
  audienceAge: "18+",
  adultTags: ["violence", "strong language", "sexual content"],
  casts: ["John Doe", "Jane Smith", "Michael Johnson", "Emily Brown"],
  emotions: ["intense", "dark", "suspenseful", "heartfelt"],

  episodes: mockEpisodes
};