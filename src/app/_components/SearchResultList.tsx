"use client";

import { useEffect, useState } from "react";
import { Movie } from "../constants/types";
import { options } from "../constants/api";
import Link from "next/link";
import { Star } from "lucide-react";

type SearchResultListProps = {
  searchValue: string;
};

export const SearchResultList = ({ searchValue }: SearchResultListProps) => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 5) || []);
    };
    fetchMovies();
  }, [searchValue]);
  const stColor = "#FDE047";

  return (
    <div className="absolute top-16 left-[-150px] md:top-14 w-[350px] bg-background rounded-lg shadow-lg z-10 ">
      {movies === null ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <>
          <div className="p-3">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={`movie-${movie.id}`}>
                <div className="mb-2 flex gap-4">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : "https://via.placeholder.com/500"
                    }
                    className="w-[67px] h-[100px] md:h-[500px] object-cover rounded-[8px]"
                    alt={movie.title}
                  />
                  <div>
                    <div className="text-[20px] font-bold min-w-24 min-h-7">
                      {movie.title}
                    </div>
                    <div className="flex gap-16">
                      <div className="flex  gap-1 mt-4">
                        <Star
                          color={`${stColor}`}
                          fill={`${stColor}`}
                          width="19.33px"
                          height="18.68px"
                        />
                        <span className="after:content-['/10'] after:text-muted-foreground ">
                          {movie?.vote_average}
                        </span>
                      </div>
                      <div className="mt-4">{movie.release_date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-3 pt-0">
            <Link
              href={`/search?query=${searchValue}`}
              className="py-2.5 px-4 text-foreground"
            >
              See all results for &#34;{searchValue}&#34;
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
