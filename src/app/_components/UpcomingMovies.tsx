import Cardd from "./Cardd";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function UpcomingMovies() {
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
    <div>
      <div className="w-full flex justify-between items-center ">
        <h3>Upcoming</h3>
        <Link href={`/category/upcoming`}>
          <p className="flex">
            See more <ArrowRight />
          </p>
        </Link>
      </div>
      <Cardd data={upcomingData.results} />
    </div>
  );
}
