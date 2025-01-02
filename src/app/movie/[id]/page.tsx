import Section from "@/app/_components/Section";
import { options } from "@/app/constants/api";
import { Star } from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await response.json();
  console.log(data);
  const stColor = "#FDE047";
  return (
    <div>
      <div className="flex gap-24 text-[#09090B]">
        <div className="ml-1">
          <h1 className="text-[24px] font-bold w-30">{data.title}</h1>
          <p className="text-[14px] mt-4">{data.release_date} </p>
        </div>
        <div className="flex items-center">
          <Star
            color={`${stColor}`}
            fill={`${stColor}`}
            width="19.33px"
            height="18.68px"
          />
          <span className="after:content-['/10'] after:text-muted-foreground ">
            {data.vote_average}
          </span>
        </div>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        className="w-full h-[200px] md:h-[500px] object-cover "
      />

      <Section
        title="More like this"
        endpoint={`movie/${params.id}/recommendations`}
        moreLink={`movie/${params.id}/recommendations`}
      />
    </div>
  );
}
