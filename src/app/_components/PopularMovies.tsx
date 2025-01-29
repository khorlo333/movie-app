import Cardd from "./Cardd";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function PopularMovies() {
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

  return (
    <div>
      <div className="w-[1400px] px-[80px] flex justify-between items-center ">
        <h3>Popular</h3>
        <Link href={`/category/popular`}>
          <p className="flex">
            See more <ArrowRight />{" "}
          </p>
        </Link>
      </div>
      <Cardd data={popularData.results} />
    </div>
  );
}
