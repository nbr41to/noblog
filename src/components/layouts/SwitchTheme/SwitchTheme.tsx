"use client";

import { Button } from "@/components/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export const SwitchTheme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <SunIcon className="size-5 dark:size-0" />
          <MoonIcon className="size-0 dark:size-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="gap-x-2" onClick={() => setTheme("light")}>
          <SunIcon className="size-4" />
          light
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2" onClick={() => setTheme("dark")}>
          <MoonIcon className="size-4" />
          dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem className="gap-x-2">
          <LaptopIcon className="size-4" />
          system
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
