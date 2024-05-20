import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn/drawer";
import { FaHome } from "react-icons/fa";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { SwitchTheme } from "../SwitchTheme";
import { NavMenuLink } from "./NavMenuLink";

export const NavMenuDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="rounded-full bg-foreground p-3">
        <HiMenuAlt2 size={24} className="fill-background" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between border-b">
          <DrawerTitle>Menu</DrawerTitle>
          <SwitchTheme />
        </DrawerHeader>

        <div className="flex gap-x-2 overflow-x-scroll p-4">
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
          <NavMenuLink href="/" title="Home" icon={<FaHome size={28} />} />
        </div>

        <DrawerFooter className="text-center font-baloo">noblog</DrawerFooter>

        <DrawerClose className=" fixed bottom-2 right-2 rounded-full bg-foreground p-3">
          <HiX size={24} className="fill-background" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
