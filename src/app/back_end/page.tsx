"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [fetchedMovies, setFetchedMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:4000/popular`);
      const data = await res.json();
      setFetchedMovies(data.data.results);
    }
    getData();
  }, []);
  console.log("fdgs", fetchedMovies);
  return (
    <div className="flex flex-wrap max-w-full gap-5">
      {fetchedMovies?.map((movie: MovieType) => {
        return (
          <div>
            <div className="max-w-[230px] h-[380px] rounded-2 overflow-hidden">
              <img
                className="w-[100%] h-[95%] object-cover rounded-2  "
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt=""
              />
            </div>
            <p className="text-[12px] flex items-center justify-start ml-2 ">
              <span className="text-[14px] font-bold flex justify-center items-center">
                <Image
                  alt={movie.original_title}
                  width={1000}
                  height={1000}
                  src={"star.svg"}
                  className="w-4 h-4 flex items-center justify-center"
                />
                {movie.vote_average.toFixed(1)}
              </span>
              /10
            </p>
            <h3 className="text-[18px]">{movie.original_title}</h3>
          </div>
        );
      })}
    </div>
  );
}
