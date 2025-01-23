import Image from "next/image";

import Card from "./_components/Card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "./_components/NavigationBar";

export default async function Home() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZjOTk3YzEzOGMyZGQ3YjMwN2NkMDA3NzlmNTc3MyIsIm5iZiI6MTczNzM0MzExNS43NTYsInN1YiI6IjY3OGRjMDhiMWFmYzM0NjQ2NzY1MzI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBQwPUQI1eZolIH5EZEEVC4fL-9xbUbAEHT89iXp7W0";

  const upcomingResponse = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const topRatedResponse = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const upcomingData = await upcomingResponse.json();
  const data = await response.json();
  const topRatedData = await topRatedResponse.json();

  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <Navigation />
      <div className="w-[1400px] px-[80px] flex justify-between items-center ">
        <h3>Upcoming</h3>
        <Button variant="outline">
          See more <ArrowRight />{" "}
        </Button>
      </div>
      <Card data={upcomingData.results} />
      <h3>Popular</h3>
      <Card data={data.results} />
      <h3>Top rated</h3>
      <Card data={topRatedData.results} />
    </div>
  );
}
