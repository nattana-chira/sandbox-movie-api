import { Episode } from "../domain/entity/Episode";
import { MovieDetails } from "../domain/entity/MovieDetail";

const mockEpisodes: Episode[] = [
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
  year: 2021,
  totalSeasons: 2,
  audienceAge: "18+",
  adultTags: ["violence", "strong language", "sexual content"],
  casts: [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown"
  ],
  genre: ["Drama", "Crime", "Thriller"],
  emotions: ["intense", "dark", "suspenseful", "heartfelt"],
  // episodes: mockEpisodes
};