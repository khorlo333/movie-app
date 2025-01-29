import { token } from "@/utilities/token";

import Image from "next/image";
import Link from "next/link";

export default async function (props: {
  params: Promise<{ similar: string }>;
}) {
  const { similar } = await props.params;
  console.log(similar);
  const moreLikeData = await fetch(
    `https://api.themoviedb.org/3/movie/${similar}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const similarMovies = await moreLikeData.json();
  return (
    <div className=" flex gap-5">
      {similarMovies.results?.map((similarMovie: MovieType) => {
        return (
          <Link
            href={`/detail/${similarMovie.id}`}
            key={similarMovie.id}
            className=" w-[230px] object-contain bg-secondary my-5"
          >
            <div className="max-w-[230px] h-[380px] rounded-2 ">
              <img
                className="w-[100%] h-[95%] object-cover rounded-2  "
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  similarMovie.poster_path
                }
                alt=""
              />
            </div>
            <p className="text-[12px] flex items-center justify-start ">
              <span className="text-[14px] font-bold flex justify-center items-center">
                <Image
                  alt={similarMovie.original_title}
                  width={1000}
                  height={1000}
                  src={"../star.svg"}
                  className="w-4 h-4 flex items-center justify-center"
                />
                {similarMovie.vote_average.toFixed(1)}
              </span>
              /10
            </p>
            <h3 className="text-[18px]">{similarMovie.original_title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
