"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, Search, SunIcon, MoonIcon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navigation() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
      <Button variant="outline" size="icon" onClick={changeThemeHandler}>
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </div>
  );
}
