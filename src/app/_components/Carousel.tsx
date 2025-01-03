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

export function CarouselDemo() {
  const stColor = "#FDE047";
  return (
    <Carousel className="w-full mb-5">
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <img src="solo.webp" className="w-full " />
              <CardContent className="">
                <span className="text-4xl font-semibold"></span>
                <div className="flex gap-24">
                  <div className="ml-1">
                    <p className="text-[14px] mt-4">Now playing:</p>
                    <h1 className="text-[24px] font-bold w-30">
                      Solo leveling
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Star
                      color={`${stColor}`}
                      fill={`${stColor}`}
                      width="19.33px"
                      height="18.68px"
                    />
                    <span className="after:content-['/10'] after:text-muted-foreground ">
                      9.9
                    </span>
                  </div>
                </div>
                <p className="text-[14px]  w-80 ml-1 mt-5">
                  Plot. In a world where hunters — human warriors who possess
                  supernatural abilities — must battle deadly monsters to
                  protect mankind from certain annihilation, a notoriously weak
                  hunter named Sung Jinwoo finds himself in a seemingly endless
                  struggle for survival.
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
