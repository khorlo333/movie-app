"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { PlayIcon } from "lucide-react";
import { token } from "@/utilities/token";

export default function TrailerCarousel({ data }: { data: number }) {
  const [trailer, setTrailer] = useState<TrailerType | null>(null);
  const getTrailerData = async () => {
    const trailerData = await fetch(
      `https://api.themoviedb.org/3/movie/${data}/videos?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const trailer = await trailerData.json();
    const officialTrailer = trailer.results?.find((video: TrailerType) => {
      return video.type === "Trailer";
    });
    setTrailer(officialTrailer);
  };
  useEffect(() => {
    getTrailerData();
  }, []);
  return (
    <Dialog>
      <DialogTrigger className="flex">
        <PlayIcon />
        Watch Trailer
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{""}</DialogTitle>
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          width={460}
          height={300}
          className=""
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
