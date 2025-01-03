"use client";

import * as React from "react";
import { Movie } from "../constants/types";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { options } from "../constants/api";

export function CarouselDemo() {
  const stColor = "#FDE047";
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movie1 = await fetch(
        `https://api.themoviedb.org/3/movie/402431`,
        options
      ).then((res) => res.json());

      const movie2 = await fetch(
        `https://api.themoviedb.org/3/movie/1241982`,
        options
      ).then((res) => res.json());

      const movie3 = await fetch(
        `https://api.themoviedb.org/3/movie/558449`,
        options
      ).then((res) => res.json());

      setMovies([movie1, movie2, movie3]);
    };
    fetchMovies();
  }, []);

  console.log({ movies });

  if (movies.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <Carousel className="w-full -mb-6">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full"
              />
              <CardContent className="">
                <span className="text-4xl font-semibold"></span>
                <div className="flex gap-24">
                  <div className="ml-1">
                    <p className="text-[14px] mt-6">Now playing:</p>
                    <h1 className="text-[24px] font-bold w-30 w-40">
                      {movie.title}
                    </h1>
                  </div>
                  <div className="flex items-center mt-3">
                    <Star
                      color={`${stColor}`}
                      fill={`${stColor}`}
                      width="19.33px"
                      height="18.68px"
                    />
                    <span className="after:content-['/10'] after:text-muted-foreground ">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
                <p className="text-[14px] ml-1 mt-5">{movie.overview}</p>
                <div className="rounded-md  w-[145px] h-[40px] mt-4 flex items-center justify-center text-white bg-btColor gap-2">
                  <Play size={16} />
                  <p className="">Watch Trailer</p>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
