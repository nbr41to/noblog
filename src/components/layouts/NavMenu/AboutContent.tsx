import { Avatar, AvatarImage } from "@/components/shadcn/avatar";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import Link from "next/link";

export const AboutContent = () => {
  return (
    <div className="flex w-fit gap-x-2 p-5">
      <Avatar className="size-20">
        <AvatarImage src="/kurumi.png" alt="avatar" />
      </Avatar>
      <div>
        <p>自己紹介文</p>
        <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            もっと詳しく
          </NavigationMenuLink>
        </Link>
      </div>
    </div>
  );
};
