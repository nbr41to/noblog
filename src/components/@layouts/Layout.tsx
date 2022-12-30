import type { FC, ReactNode } from "react";

import { useRouter } from "next/router";
import { useMemo } from "react";

import { Breadcrumbs } from "./Breadcrumbs";
import { NavMenu } from "./NavMenu";
import { ScrollTopButton } from "./ScrollTopButton";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const breadcrumbsItems = useMemo(() => {
    const currentPath = router.asPath;
    if (currentPath === "/") return []; // home page

    const paths = currentPath.split("#")[0].split("/");
    const items = paths.map((path, index) => {
      const href = paths.slice(0, index + 1).join("/") || "/";

      return {
        title: path || "home",
        href,
      };
    });

    return items;
  }, [router.asPath]);

  return (
    <div>
      <div className="fixed z-10">
        <NavMenu />
      </div>

      <header className="py-4">
        <div
          className="mx-auto w-fit cursor-pointer"
          onClick={() => router.push("/")}
        >
          <h1 className="font-baloo text-4xl">noblog</h1>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] pb-16">
        <div className="overflow-x-scroll py-4 pl-4 sp:py-2 sp:pl-0">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
        {children}
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-slate-800 py-1 text-center text-white">
        <small>@2023</small>
      </footer>
      <ScrollTopButton />
    </div>
  );
};
