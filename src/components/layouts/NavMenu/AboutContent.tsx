import { Avatar, AvatarImage } from "@/components/shadcn/avatar";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import Link from "next/link";

export const AboutContent = () => {
  return (
    <div className="flex w-full gap-x-4 p-5">
      <div className="grid place-items-center content-center gap-y-2">
        <Avatar className="size-20">
          <AvatarImage src="/kurumi.png" alt="avatar" />
        </Avatar>
        <div className="font-bold">nob</div>
      </div>

      <div className="flex flex-col justify-between gap-y-2">
        <div className="text-sm">
          <p className="py-2 font-bold">bio</p>
          <p>フロントエンジニアになったよわーい</p>
          <p>フリーランスになったよわーい</p>
          <p className="py-1">
            #javascript #typescript #react #nextjs #graphql
          </p>
        </div>

        <div className="text-right">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              もっと詳しく
            </NavigationMenuLink>
          </Link>
        </div>
      </div>
    </div>
  );
};
