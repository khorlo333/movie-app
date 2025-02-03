// "use client";
import Image from "next/image";
import { token } from "@/utilities/token";
import { ToggleGroupDemo } from "@/app/_components/Toggle";
import Link from "next/link";
// import { PaginationDemo } from "@/app/_components/Pagination";
// import { useState } from "react";

// const [search, setSearch] = useState("");

export default async function SearchPage({
  params: { searchId },
}: {
  params: { searchId: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchId}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="w-[1280px] m-auto mt-[52px]">
      <h1 className="text-[30px] font-semibold">Search filter</h1>
      <div className="flex w-[1280px] m-auto justify-between mt-10 ">
        <div className="w-[400px] sticky top-10">
          <h2 className="text-[24px] font-semibold ">Genres</h2>
          <p className="text-[16px] mb-[20px]">See lists of movies by genre</p>
          <ToggleGroupDemo />
        </div>
        <div className="border-l-[0.5px] pl-[20px]">
          <h1 className="mb-[32px] flex gap">
            {data.total_results} Results for "<p>{searchId}</p>"
          </h1>
          <div className="w-[800px] flex flex-wrap justify-between  gap-5">
            {data.results?.map((movie: MovieType, index: number) => {
              return (
                <div key={index}>
                  <Link
                    href={`/cardinfo/${movie.id} on`}
                    // onClick={() => clickHandler}
                  >
                    <div className="w-[165px] h-[331px] border-amber-400 bg-stone-800 rounded-md overflow-hidden hover:opacity-50 transition-all ease-in">
                      <Image
                        width={200}
                        height={200}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        className="w-[165px] h-[244px] rounded-t-md"
                      />
                      <div className="p-[10px]">
                        <div className="flex gap-[10px] text-[14px] items-center ">
                          <img src="/Star.svg" alt="" />
                          <p> {movie.vote_average}/10</p>
                        </div>
                        <p className="text-[17px] ">{movie.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
    </div>
  );
}
