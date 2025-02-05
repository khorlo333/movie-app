import { token } from "@/utilities/token";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

export async function Genre() {
  const genresResponse = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const genresData = await genresResponse.json();
  {
    // console.log(genresData);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-[36px] w-[97px] py-2 px-4 rounded-[6px]"
        >
          <ChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          Genres
          <p>See lists of movies by genre</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="w-[600px] bg-secondary flex flex-wrap">
          {genresData.genres?.map((data: GenreType) => {
            return (
              <Link href={`/genres/${data.id}`} key={data.id}>
                <DropdownMenuItem
                  className=" overflow-hidden p-1 flex-wrap 
               flex gap-6 text-3 border-[1px] rounded-xl cursor-pointer items-center pl-1"
                >
                  {data?.name} <ChevronRight className="size-4" />
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
