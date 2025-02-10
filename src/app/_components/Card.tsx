import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Card({ data }: { data: MovieType[] }) {
  return (
    <div className="flex max-w-[1400px] px-[80px] flex-wrap justify-between ">
      {/* <div className="w-full flex justify-between items-center ">
        <h3>{}</h3>
        <p className="flex">
          See more <ArrowRight />
        </p>
      </div> */}
      {data?.slice(0, 10).map((movie: MovieType) => {
        return (
          <Link
            href={`/detail/${movie.id}`}
            key={movie.id}
            className=" w-[230px] object-contain rounded-lg overflow-hidden bg-secondary my-5"
          >
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
          </Link>
        );
      })}
    </div>
  );
}
