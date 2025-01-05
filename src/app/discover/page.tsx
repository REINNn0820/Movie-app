"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie, PageInfo } from "../constants/types";
import { options } from "../constants/api";
import MovieCard from "../_components/MovieCard";
import { Pagination } from "@/components/ui/pagination";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const genres = searchParams.get("with_genres");
   const [pageInfo, setPageInfo] = useState<PageInfo>({
      totalPages: 0,
      currentPage: 1,
    });

  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 10));
    };
    fetchMovies();
  }, [genres]);
  return (
    <>
      <div className="gap-5 m-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((e) => (
          <MovieCard movie={e} key={`movie-${e.id}`} />
        ))}
      </div>
    
    </>
  );
}
