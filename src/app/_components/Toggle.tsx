import { Bold } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { token } from "@/utilities/token";

import Link from "next/link";

export async function ToggleGroupDemo() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const genreName = await response.json();

  return (
    <ToggleGroup
      type="multiple"
      className="flex flex-wrap w-[352px] justify-start
    "
    >
      {genreName.genres.map((genre: GenreType) => (
        <ToggleGroupItem
          key={genre.id}
          value={genre.name}
          aria-label={`Toggle ${genre.name}`}
          className="text-[14px]"
        >
          <Link href={`/genreLink/${genre.id}`}>{genre.name}</Link>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
