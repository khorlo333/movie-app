import NowPlaying from "./_components/NowPlaying";
import Movies from "./_components/Movies";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <NowPlaying />
      <Movies />
    </div>
  );
}
