import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";
import { Genre } from "./Genre";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full sticky top-0 bg-inherit z-50">
      <div className=" w-[1400px] h-[60px]  flex justify-between items-center px-[80px] m-auto">
        <Link href={`http://localhost:3000/`}>
          <Image
            alt={"logo"}
            width={100}
            height={100}
            src={"/Logo.svg"}
            sizes="logo"
          />
        </Link>
        <div className="flex justify-between items-center gap-2.5">
          <Genre />
          <div className="flex border-solid border-2 rounded-lg items-center">
            <Search className="pl-1" />
            <Input
              type="text"
              placeholder="Search"
              className="border-none shadow-none ml-[-8px] focus:outline-none focus-visible:ring-0"
            />
          </div>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
}
