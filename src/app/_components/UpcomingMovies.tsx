import Card from "./Card";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";

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
      <div className="w-[1400px] px-[80px] flex justify-between items-center ">
        <h3>Upcoming</h3>
        <p className="flex">
          See more <ArrowRight />{" "}
        </p>
      </div>
      <Card data={upcomingData.results} />
    </div>
  );
}
