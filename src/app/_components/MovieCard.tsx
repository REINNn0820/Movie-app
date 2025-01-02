import { Star } from "lucide-react";
import { Movie } from "../constants/types";
import Link from "next/link";

export default function MovieCard({
  movie,
  key,
}: {
  movie: Movie;
  key: Movie["id"];
}) {
  const stColor = "#FDE047";
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className={`bg-bgColor rounded-lg`} key={key}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-t-lg"
        />
        <div className="p-2">
          <div className="flex gap-1 items-center">
            <Star
              color={`${stColor}`}
              fill={`${stColor}`}
              width="13.33px"
              height="12.68px"
            />
            <span className="after:content-['/10'] after:text-muted-foreground ">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <h2>{movie.title}</h2>
        </div>
      </div>
    </Link>
  );
}
