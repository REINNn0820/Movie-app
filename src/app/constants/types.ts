export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};
export type Genres = {
  name:string
}

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};

export type GenreType = {
  id:number,
  name:string
}
