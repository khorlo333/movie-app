"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { token } from "@/utilities/token";
import { ArrowRight } from "lucide-react";

export default function Input() {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([]);

  const addHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearch(search);
    if (search == "") {
      setValue([]);
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=${1}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    setValue(data.results || []);
  };
  const clickHandler = () => {
    setSearch("");
    setValue([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={addHandler}
        className=""
      />
      {search ? (
        <div className="absolute top-[40px]">
          {value.slice(0, 5).map((movie: MovieType, index: number) => {
            return (
              <div key={index} className="flex flex-col w-full">
                <Link
                  href={`/detail/${movie.id}`}
                  onClick={() => clickHandler()}
                >
                  <Card className="w-[545px] gap-5 p-5 rounded-md hover:bg-secondary  flex justify-start ">
                    <img
                      className="w-[76px] h-[100px] rounded-lg"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie?.poster_path
                      }
                    />
                    <button
                      className="text-[20px] flex flex-col justify-start w-full"
                      key={index}
                    >
                      {movie?.original_title}
                      <div className="flex items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src="/Star.svg"
                          alt=""
                        />
                        {movie.vote_average.toFixed(1)}/10
                      </div>
                      <div className="flex justify-between w-full">
                        <div>{movie.release_date}</div>
                        <div className="flex items-center">
                          See more <ArrowRight />
                        </div>
                      </div>
                    </button>
                  </Card>
                </Link>
              </div>
            );
          })}
          <Link href={`/search/${search}`}>
            <Card className="h-[34px] flex items-center justify-center">
              See all results for " search "
            </Card>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
