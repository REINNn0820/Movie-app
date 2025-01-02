import * as React from "react";
import { Movie } from "../constants/types";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
export function CarouselDemo({
  movie,
  key,
}: {
  movie: Movie;
  key: Movie["id"];
}) {
  const stColor = "#FDE047";
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <img src="solo.webp" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-32">
        <div className="ml-6">
          <p className="text-[14px] text-[#09090B]">Now playing:</p>
          <h1 className="text-[18px] font-semibold text-[#09090B] w-32">
            Solo leveling
          </h1>
        </div>
        <div className="flex items-center">
          <Star
            color={`${stColor}`}
            fill={`${stColor}`}
            width="13.33px"
            height="12.68px"
          />
          <span className="after:content-['/10'] after:text-muted-foreground ">
            9.9
          </span>
        </div>
      </div>
      <p className="text-[14px] text-[#09090B] w-80 ml-6">
        Plot. In a world where hunters — human warriors who possess supernatural
        abilities — must battle deadly monsters to protect mankind from certain
        annihilation, a notoriously weak hunter named Sung Jinwoo finds himself
        in a seemingly endless struggle for survival.
      </p>
    </Carousel>
  );
}
