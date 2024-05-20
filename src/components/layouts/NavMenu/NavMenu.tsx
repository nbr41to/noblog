"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { AboutContent } from "./AboutContent";
import { ExternalLinkCard } from "./ExternalLinkCard";

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutContent />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            Blog
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                最新の記事をここに掲載
              </NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-80 space-y-2 p-5">
            <ExternalLinkCard
              className="bg-sky-50 hover:bg-sky-100"
              href="https://x.com/Knob_nbr41to"
              icon={<FaXTwitter size={20} />}
              text="@Knob_nbr41to"
            />
            <ExternalLinkCard
              className="bg-violet-50 hover:bg-violet-100"
              href="https://github.com/nbr41to"
              icon={<FaGithub size={20} />}
              text="@nbr41to"
            />
            <ExternalLinkCard
              className="bg-blue-50 hover:bg-blue-100"
              href="https://zenn.dev/nbr41to"
              icon={<SiZenn size={20} className="fill-[#3EA8FF]" />}
              text="@nbr41to"
            />
            <ExternalLinkCard
              className="bg-red-50 hover:bg-red-100"
              href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
              icon={<FaYoutube size={20} className="fill-[#FF0000]" />}
              text="@progLearning"
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
