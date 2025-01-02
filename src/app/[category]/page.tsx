import MovieCard from "../_components/MovieCard";
import { options } from "../constants/api";
import { Movie } from "../constants/types";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  );
  const resJson = await response.json();
  const movies: Movie[] = resJson.results;
  return (
    <div className="w-72 grid grid-cols-2 gap-6 ml-10 mt-6 mb-6">
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
