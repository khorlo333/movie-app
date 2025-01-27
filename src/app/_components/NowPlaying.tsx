import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { token } from "@/utilities/token";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayIcon } from "lucide-react";

export default async function NowPlaying() {
  const nowPlayingResponse = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const nowPlayingData = await nowPlayingResponse.json();
  return (
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {nowPlayingData.results.slice(0, 10).map((data: MovieType) => {
          return (
            <CarouselItem key={data.id} className="w-full">
              <Card className="relative w-full">
                <CardContent className="w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-fi h-[620px] w-full relative"
                    src={
                      `https://image.tmdb.org/t/p/` +
                      "original" +
                      `${data.backdrop_path}`
                    }
                    alt={data.original_title}
                  ></Image>
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
                    <Button variant={"secondary"} className="">
                      <PlayIcon />
                      Watch Trailer
                    </Button>
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
