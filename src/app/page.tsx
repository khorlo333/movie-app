import Image from "next/image";

export default async function Home() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjZjOTk3YzEzOGMyZGQ3YjMwN2NkMDA3NzlmNTc3MyIsIm5iZiI6MTczNzM0MzExNS43NTYsInN1YiI6IjY3OGRjMDhiMWFmYzM0NjQ2NzY1MzI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qBQwPUQI1eZolIH5EZEEVC4fL-9xbUbAEHT89iXp7W0";

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

  return (
    <div className="flex justify-center items-center max-w-[1440px] h-[100vh] px-[80px] flex-wrap gap-5  ">
      {data.results?.slice(0, 10).map((movie: MovieType) => {
        return (
          <div
            key={movie.id}
            className=" w-[230px] object-contain bg-[#f4f4f5]"
          >
            <div className="max-w-[230px] h-[440px] rounded-2 ">
              <img
                className="w-[100%] h-[340px] object-cover rounded-2  "
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                alt=""
              />
            </div>
            <p className="text-[12px] flex ">
              <span className="text-[14px] font-bold flex">
                <Image
                  alt={movie.original_title}
                  width={1000}
                  height={1000}
                  src={"star.svg"}
                  className="w-4 h-4"
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
