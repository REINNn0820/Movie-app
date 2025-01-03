"use client";

import Section from "@/app/_components/Section";
import { options } from "@/app/constants/api";
import { Genres, MovieDetail } from "@/app/constants/types";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const stColor = "#FDE047";

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
        <button className="absolute left-5 bottom-4">ahhaahha</button>
      </div>
      <div className="flex gap-8">
        <div className="w-1/3 ml-4">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
            className="w-[100px] h-[148px] md:h-[500px] object-cover "
          />
        </div>
        <div className="w-2/3 mr-6">
          <div className="mb-4">
            {movieDetail?.genres.map((el) => (
              <Badge className="ml-2 mb-2"> {el.name}</Badge>
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
    </div>
  );
}
