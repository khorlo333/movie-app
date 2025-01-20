"use client";

import { useEffect, useState } from "react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();
  // const [card, setCard] = useState<MovieType | undefined>();

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZjOTk3YzEzOGMyZGQ3YjMwN2NkMDA3NzlmNTc3MyIsIm5iZiI6MTczNzM0MzExNS43NTYsInN1YiI6IjY3OGRjMDhiMWFmYzM0NjQ2NzY1MzI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBQwPUQI1eZolIH5EZEEVC4fL-9xbUbAEHT89iXp7W0";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovies(data.results);
    }
  };
  // const getCard = async () => {
  //   const response = await fetch(
  //     // "https://api.themoviedb.org/3/movie/{539972}/images",
  //     `https://image.tmdb.org/t/p=`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   if (data?.results) {
  //     setCard(data.results[0]);
  //   }
  // };
  useEffect(() => {
    getMovie();
    // getCard();
    console.log("getting movie");
  }, []);
  console.log({ movies });
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] text-green-500 text-[20px] relative">
      {movies?.map((movie, index) => {
        return (
          <div
            className="flex justify-between w-[1280px] max-h-[980px] object-contain flex-wrap absolute"
            key={index}
          >
            <div className="max-w-[230px] h-[440px] rounded-2 ">
              <img
                className="w-[100%] h-[100%] object-cover "
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt=""
              />
            </div>
            <div>{movie.original_title}</div>
          </div>
        );
      })}
    </div>
  );
}
