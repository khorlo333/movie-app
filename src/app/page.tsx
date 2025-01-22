import Image from "next/image";

import Card from "./_components/Card";

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
  const topRatedResponse = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const topRatedData = await topRatedResponse.json();

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <Card data={data.results} />
      <Card data={topRatedData.results} />
    </div>
  );
}
