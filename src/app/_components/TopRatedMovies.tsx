import Cardd from "./Cardd";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";

export default async function TopRated() {
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

  return (
    <div>
      <div className="w-[1400px] px-[80px] flex justify-between items-center ">
        <h3>Top rated</h3>
        <p className="flex">
          See more <ArrowRight />{" "}
        </p>
      </div>
      <Cardd data={topRatedData.results} />
    </div>
  );
}
