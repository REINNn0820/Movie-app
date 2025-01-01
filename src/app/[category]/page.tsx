
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
   <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
           {movies?.map((movie) => (
             <MovieCard key={movie.id} movie={movie} />
           ))}
         </div>
  );
}
