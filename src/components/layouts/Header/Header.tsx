import Link from "next/link";
import { NavMenu } from "../NavMenu";
import { NavMenuDrawer } from "../NavMenuDrawer";
import { SearchCommand } from "../SearchCommand";
import { SwitchTheme } from "../SwitchTheme";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full  border-b bg-background py-2">
      <div className="mx-auto flex max-w-screen-xl justify-center px-4 md:justify-between">
        <Link href="/" className="group flex items-end gap-x-3">
          <h1 className="text-center font-baloo text-3xl group-hover:-rotate-1 group-hover:drop-shadow-sm">
            noblog
          </h1>
          <p className="text-2xs transition-transform group-hover:rotate-1">
            〜 わくわくする毎日は自分次第 〜
          </p>
        </Link>

        <div className="right-4 hidden gap-x-2 md:flex">
          <NavMenu />
          <SearchCommand />
          <SwitchTheme />
        </div>

        <div className="fixed bottom-2 right-2 md:hidden">
          <NavMenuDrawer />
        </div>
      </div>
    </header>
  );
};
