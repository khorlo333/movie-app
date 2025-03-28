import Card from "./Card";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Movies() {
  const popularResponse = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const popularData = await popularResponse.json();
  // console.log(popularData);
  const topRatedResponse = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const topRatedData = await topRatedResponse.json();
  const upcomingResponse = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",

    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const upcomingData = await upcomingResponse.json();

  return (
    <div className="w-[1400px] mt-8">
      <div>
        <div className="w-full px-20 flex justify-between items-center ">
          <h3>Upcoming</h3>
          <Link href={`/category/upcoming`}>
            <p className="flex">
              See more <ArrowRight />
            </p>
          </Link>
        </div>
        <Card data={upcomingData.results}></Card>

        <div className="w-full px-20 flex justify-between items-center ">
          <h3>Popular</h3>
          <Link href={`/category/popular`}>
            <p className="flex">
              See more <ArrowRight />{" "}
            </p>
          </Link>
        </div>
        <Card data={popularData.results}></Card>

        <div className="w-full px-20 flex justify-between items-center ">
          <h3>Top rated</h3>
          <Link href={`/category/top_rated`}>
            <p className="flex">
              See more <ArrowRight />{" "}
            </p>
          </Link>
        </div>
        <Card data={topRatedData.results}></Card>
      </div>
    </div>
  );
}
