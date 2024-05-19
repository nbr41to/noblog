import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import Link from "next/link";

export const NavMenuAboutContent = () => {
  return (
    <div>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          About
        </NavigationMenuLink>
      </Link>
    </div>
  );
};
