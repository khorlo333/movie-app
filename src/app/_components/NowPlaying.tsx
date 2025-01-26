import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { token } from "@/utilities/token";

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
    <Carousel>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
