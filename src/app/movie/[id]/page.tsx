"use client";

import Section from "@/app/_components/Section";
import { options } from "@/app/constants/api";
import { Genres, Movie, MovieDetail } from "@/app/constants/types";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import MovieCard from "@/app/_components/MovieCard";

export default function Page() {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const stColor = "#FDE047";
  const [movies, setMovies] = useState<Movie[]>([]);

  const { id } = useParams();
  useEffect(() => {
    console.log({ id });

    const fetchMovieDetail = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      const data = await response.json();
      console.log({ data });
      setMovieDetail(data);
    };
    fetchMovieDetail();
  }, [id]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=1`,
        options
      );
      const data = await response.json();

      console.log(data);
      setMovies(data.results?.slice(0, 10));
    };
    fetchMovies();
  }, [params]);

  const movieTime = movieDetail?.runtime ?? 0;
  const hours = Math.floor(movieTime / 60);
  const min = movieTime % 60;
  return (
    <div>
      <div className="flex gap-28 mb-6">
        <div className="ml-4">
          <h1 className="text-[24px] font-bold w-30 max-w-36">
            {movieDetail?.title}
          </h1>
          <p className="text-[14px] mt-1">
            {movieDetail?.release_date} · {hours}h {min}min
          </p>
        </div>
        <div className="flex items-center">
          <Star
            color={`${stColor}`}
            fill={`${stColor}`}
            width="19.33px"
            height="18.68px"
          />
          <span className="after:content-['/10'] after:text-muted-foreground ">
            {movieDetail?.vote_average}
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
          className="w-full h-[200px] md:h-[500px] object-cover mb-10 opacity-70 "
        />
        <div className="absolute left-4 bottom-4 flex items-center gap-3">
          <div className=" flex justify-center items-center rounded-[50px] w-10 h-10">
            <Play />
          </div>
          <div>Play Trailer</div>
          <div>2:35</div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/3 ml-4">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
            className="w-[100px] h-[148px] md:h-[500px] object-cover "
          />
        </div>
        <div className="w-2/3 mr-6">
          <div className="mb-4" key={movieDetail?.id}>
            {movieDetail?.genres.map((el) => (
              <Badge className="ml-2 mb-2" key={el.id}>
                {" "}
                {el.name}
              </Badge>
            ))}
          </div>
          <p className="text-[15px]">{movieDetail?.overview}</p>
        </div>
      </div>

      <div className="flex flex-col mt-4 ">
        <div className="flex mb-2">
          <p className="ml-9 text[#09090B] font-bold min-w-24">Director</p>
          <p className="">U know who it is </p>
        </div>
        <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>

      <div className="flex flex-col mt-4 ">
        <div className="flex mb-2">
          <p className="ml-9 text[#09090B] font-bold min-w-24">Writers</p>
          <p className="">Prolly me</p>
        </div>
        <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>

      <div className="flex flex-col mt-4 ">
        <div className="flex mb-2">
          <p className="ml-9 text[#09090B] font-bold min-w-24">Stars</p>
          <p className="">Just kidding</p>
        </div>
        <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>
      <div className="gap-5 m-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
