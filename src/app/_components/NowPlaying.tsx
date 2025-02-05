"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { token } from "@/utilities/token";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import TrailerCarousel from "./TrailerOnCarousel";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function NowPlaying() {
  const [data, setData] = useState<MovieType[] | null>(null);
  const getData = async () => {
    const nowPlayingResponse = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const nowPlayingData = await nowPlayingResponse.json();
    setData(nowPlayingData.results || []);
  };

  useEffect(() => {
    getData();
  }, []);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {data?.slice(0, 10).map((data: MovieType) => {
          return (
            <CarouselItem key={data.id} className="w-full">
              <Card className="relative w-full">
                <CardContent className="w-full">
                  <Link href={`/detail/${data.id}`}>
                    <Image
                      width={1000}
                      height={1000}
                      className="object-cover h-[620px] w-full relative"
                      src={
                        `https://image.tmdb.org/t/p/` +
                        "original" +
                        `${data.backdrop_path}`
                      }
                      alt={data.original_title}
                    ></Image>
                  </Link>
                  <div className="absolute left-[140px] bottom-[158px] w-[302px] text-[#FAFAFA] ">
                    <p className="">Now Playing:</p>
                    {data.original_title}
                    <p className="flex text-[16px] items-center gap-1">
                      <img className="size-7" src="star.svg" alt="" />
                      <span className="text-[18px] font-bold flex">
                        {" "}
                        {data.vote_average.toFixed(1)}
                      </span>{" "}
                      /10
                    </p>
                    <p className="text-wrap">{data.overview}</p>
                    <TrailerCarousel data={data.id} />
                  </div>
                </CardContent>
                <CarouselPrevious className=" absolute top-1/2 translate-y-1/2 left-11" />
                <CarouselNext className="absolute top-1/2 translate-y-1/2 right-11" />
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
