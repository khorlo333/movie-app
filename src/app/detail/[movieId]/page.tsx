import Link from "next/link";
import Navigation from "@/app/_components/NavigationBar";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayIcon } from "lucide-react";
import React from "react";
import { token } from "@/utilities/token";

export default async function Detail(props: {
  params: Promise<{ movieId: MovieType }>;
}) {
  const { movieId } = await props.params;
  const getData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await getData.json();

  const actors = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const actorsData = await actors.json();

  const moreLikeData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const similar = await moreLikeData.json();
  // const genresResponse = await fetch(
  //   `https://api.themoviedb.org/3/genre/movie/${movieId}/list?language=en`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // const genresData = await genresResponse.json();

  const trailerData = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const trailer = await trailerData.json();
  const voteCount = data.vote_count / 1000;
  const durationHour = data.runtime / 60;
  const duration = data.runtime % 60;
  console.log(actorsData.crew);

  return (
    <div className="w-[1400px] px-[80px] flex flex-col justify-between items-center gap-6 ">
      <div className="w-full px-20 flex justify-between">
        <div>
          <p>{data.original_title}</p>
          <p>
            {data.release_date} {durationHour.toFixed(0.1)}h {duration}m
          </p>
        </div>
        <div className="text-end">
          <div className="flex justify-center items-center gap-2">
            <h2>Rating</h2>
            <img src="/star.svg" alt="" className="w-[30px] h-[50px]" />
          </div>
          <p> {data.vote_average}/10</p>
          <p className="text-[10px]"> {voteCount.toFixed(1)}k</p>
        </div>
      </div>
      <div className="flex gap-2.5 m-auto">
        <Image
          className="w-[300px] h-[450px] cursor-pointer rounded-lg"
          width={1000}
          height={1000}
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.original_title}
        />
        <Dialog>
          <div className="relative">
            <Image
              className="w-full h-[450px] cursor-pointer rounded-lg bg-black opacity-60"
              width={1000}
              height={1000}
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt={data.original_title}
              priority
            />
            <DialogTrigger className="absolute bottom-4 left-8 text-white flex">
              {/* <Button variant={"secondary"} className=""> */}
              <PlayIcon className="rounded-full w-9 h-9 bg-white p-2 text-black opacity-100" />
              Play trailer
              {/* </Button> */}
            </DialogTrigger>
          </div>
          <DialogContent className="w-[700px] bg-secondary ">
            <DialogTitle className="">{""}</DialogTitle>
            {/* <DialogTitle className="">{trailer.results[0].name}</DialogTitle> */}
            <iframe
              src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
              width={460}
              height={300}
              className=""
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full px-20">
        <div className="flex justify-start gap-4">
          {data.genres.map((genre: GenreType) => {
            return (
              <p
                key={genre.id}
                className="border border-solid rounded-xl px-2 "
              >
                {genre.name}
              </p>
            );
          })}
        </div>
        <p>{data.overview}</p>

        <p className="flex gap-5">
          <span className="font-bold"> {actorsData.crew[0].job} </span>
          {actorsData.crew[0].name}
        </p>
        <p className="flex gap-5">
          <span className="font-bold"> {actorsData.crew[9].job} </span>
          {actorsData.crew[9].name}
        </p>
        <p className="flex gap-5">
          <span className="font-bold"> Stars </span>

          {actorsData.cast.slice(0, 5).map((actor: CastType) => {
            return <p key={actor.id}>{actor.name}</p>;
          })}
        </p>
      </div>
    </div>
  );
}
