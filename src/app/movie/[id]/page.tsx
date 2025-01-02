import Section from "@/app/_components/Section";
import { options } from "@/app/constants/api";
import { Genres } from "@/app/constants/types";
import { Star } from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = await response.json();
  const stColor = "#FDE047";
  const number: number = data.runtime
  const divider = number / 60;
  const divide = number % 60
  const integerValue: number = divider | 0;
  return (
    <div>
      <div className="flex gap-28 text-[#09090B] mb-6">
        <div className="ml-4">
          <h1 className="text-[24px] font-bold w-30 max-w-36">{data.title}</h1>
          <p className="text-[14px] mt-1">{data.release_date} · {integerValue}h {divide}min</p>
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
        className="w-full h-[200px] md:h-[500px] object-cover mb-10 "
      />
      <div className="flex gap-8">
        <div className="w-1/3 ml-4"><img
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        className="w-[100px] h-[148px] md:h-[500px] object-cover "
      /></div>
        <div className="w-2/3 mr-6">
          <p className="text-[15px]">{data.overview}</p>
        </div>
      </div>

      <div className="flex flex-col mt-4 ">
      <div className="flex mb-2">
        <p className="ml-9 text[#09090B] font-bold min-w-24">Director</p><p className="">U know who it is </p>
      </div>
      <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>


      <div className="flex flex-col mt-4 ">
      <div className="flex mb-2">
        <p className="ml-9 text[#09090B] font-bold min-w-24">Writers</p><p className="">Prolly me</p>
      </div>
      <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>


      <div className="flex flex-col mt-4 ">
      <div className="flex mb-2">
        <p className="ml-9 text[#09090B] font-bold min-w-24">Stars</p><p className="">Just kidding</p>
      </div>
      <div className="bg-[#E4E4E7] h-[1px] w-[80%] mr-auto ml-auto  "></div>
      </div>

      <Section
        title="More like this"
        endpoint={`movie/${params?.id}/recommendations`}
        moreLink={`movie/${params?.id}/recommendations`}
      />
    </div>
  );
}
