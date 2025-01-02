"use client"
import { useParams, useSearchParams } from "next/navigation";
import MovieCard from "../_components/MovieCard";
import { options } from "../constants/api";
import { Movie } from "../constants/types";
import { useEffect, useState } from "react";
import { PaginationConstrols } from "../_components/Pagination";

export default async function Page() {
  const params = useParams()
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
 const [movies, setMovies] = useState<Movie[]>([]);
 const [pageInfo, setPageInfo] = useState<PageInfo>({
  totalPages:0,
  currentPage:0,
 })

 useEffect(() => {
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.category}?language=en-US$page=1`,options
    );
   const data = await response.json();
    setMovies(data.results.slice(0,5));
    setPageInfo({currentPage:Number(page), totalPages:data.total_pages})
  };
  fetchMovies()
 },[params]);
  return (
   <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
           {movies?.map((movie) => (
             <MovieCard key={movie.id} movie={movie} />
           ))}

           <PaginationConstrols pageInfo = {pageInfo}/>
         </div>
  );
}
