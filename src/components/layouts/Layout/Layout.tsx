import type { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "./Main";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-svh flex-col justify-between pt-14">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
