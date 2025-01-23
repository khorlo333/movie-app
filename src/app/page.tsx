import Navigation from "./_components/NavigationBar";
import TopRated from "./_components/TopRatedMovies";
import PopularMovies from "./_components/PopularMovies";
import UpcomingMovies from "./_components/UpcomingMovies";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <Navigation />
      <UpcomingMovies />
      <PopularMovies />
      <TopRated />
    </div>
  );
}
