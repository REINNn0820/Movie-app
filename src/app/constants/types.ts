export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};
export type Genres = {
  name: string;
  id: number;
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};

export type GenreType = {
  id: number;
  name: string;
};

export type MovieDetail = {
  id: number;
  title: string;
  poster_path: number;
  vote_average: string;
  genres: Genres[];
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  runtime: number;
};
