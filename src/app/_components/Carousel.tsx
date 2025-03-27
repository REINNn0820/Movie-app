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
    <Carousel className="w-full mb-6 mt-6">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                srcSet={`
                  https://image.tmdb.org/t/p/w500${movie.backdrop_path} 500w,
                  https://image.tmdb.org/t/p/w780${movie.backdrop_path} 780w,
                  https://image.tmdb.org/t/p/original${movie.backdrop_path} 1280w
                `}
                sizes="(max-width: 600px) 500px, (max-width: 1024px) 780px, 1280px"
                alt={movie.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
              <CardContent className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black via-transparent to-transparent w-full">
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
                <p className="text-[11px] ml-1 mt-5 sm:text-[12px] md:text-[13px]lg:text-[14px] xl:text-[15px] w-96">
                  {movie.overview}
                </p>
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
