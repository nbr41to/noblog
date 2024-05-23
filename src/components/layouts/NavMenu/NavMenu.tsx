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
import { LatestPostCard } from "@/features/posts/LatestPostCard";
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
          <NavigationMenuContent className="min-w-96">
            <AboutContent />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            Blog
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-[580px] space-y-2 p-5">
            <p>最新の記事3件</p>
            <LatestPostCard
              postId="1"
              icon="🎃"
              title="Notionでブログをつくってみよう！！"
              updatedAt={new Date("2024-09-01T00:00:00Z")}
              tags={["react", "notion"]}
            />
            <LatestPostCard
              postId="1"
              icon="🍭"
              title="Next.jsでブログをつくってみよう！！"
              updatedAt={new Date("2024-09-01T00:00:00Z")}
              tags={["react", "notion"]}
            />
            <LatestPostCard
              postId="1"
              icon="🍩"
              title="TypeScriptでブログをつくってみよう！！"
              updatedAt={new Date("2024-09-01T00:00:00Z")}
              tags={["react", "notion"]}
            />
            <div className="text-right">
              <Link href="/blog/posts" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  もっとみる
                </NavigationMenuLink>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-64 space-y-2 p-5">
            <ExternalLinkCard
              className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-950 dark:hover:bg-sky-900"
              href="https://x.com/Knob_nbr41to"
              icon={<FaXTwitter size={20} />}
              text="@Knob_nbr41to"
            />
            <ExternalLinkCard
              className="bg-violet-50 hover:bg-violet-100 dark:bg-violet-950 dark:hover:bg-violet-900"
              href="https://github.com/nbr41to"
              icon={<FaGithub size={20} />}
              text="@nbr41to"
            />
            <ExternalLinkCard
              className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900"
              href="https://zenn.dev/nbr41to"
              icon={<SiZenn size={20} className="fill-[#3EA8FF]" />}
              text="@nbr41to"
            />
            <ExternalLinkCard
              className="bg-red-50 hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900"
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
