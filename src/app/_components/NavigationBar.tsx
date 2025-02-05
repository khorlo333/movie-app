// import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";
import { Genre } from "./Genre";
import Link from "next/link";
import Input from "./Input";

export default function Navigation() {
  return (
    <div className="w-full h-[59px] px-4 sticky top-0 bg-inherit z-50">
      <div className=" max-w-[1280px] h-9 flex justify-between items-center m-auto">
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
          <div className="flex w-[379px] h-9 gap-2.5  border-solid border-[1px] rounded-lg items-center">
            <Search className="w-4 h-4 flex-shrink-0" />
            <Input />
          </div>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
}
