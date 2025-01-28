import Navigation from "./_components/NavigationBar";
import TopRated from "./_components/TopRatedMovies";
import PopularMovies from "./_components/PopularMovies";
import UpcomingMovies from "./_components/UpcomingMovies";
import NowPlaying from "./_components/NowPlaying";
import Movies from "./_components/Movies";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <NowPlaying />
      <UpcomingMovies />
      <PopularMovies />
      <TopRated />
      {/* <Movies /> */}
    </div>
  );
}
