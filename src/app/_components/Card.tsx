import Image from "next/image";

export default async function Card({ data }: { data: MovieType[] }) {
  return (
    <div className="flex max-w-[1440px] h-[100vh] px-[80px] flex-wrap gap-5  ">
      {data?.slice(0, 10).map((movie: MovieType) => {
        return (
          <div
            key={movie.id}
            className=" w-[230px] object-contain bg-[#f4f4f5]"
          >
            <div className="max-w-[230px] h-[380px] rounded-2 ">
              <img
                className="w-[100%] h-[340px] object-cover rounded-2  "
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt=""
              />
            </div>
            <p className="text-[12px] flex items-center justify-start ">
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
