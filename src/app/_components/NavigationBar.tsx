import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, Search } from "lucide-react";
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";

export default function Navigation() {
  return (
    <div className=" w-[1400px] h-9 flex justify-between items-center px-[80px]">
      <Image alt={"logo"} width={100} height={100} src={"/Logo.svg"} />
      <div className="flex justify-between items-center gap-2.5">
        <Button variant="outline">
          <ArrowDown />
          Genre
        </Button>
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
  );
}
