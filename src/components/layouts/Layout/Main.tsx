import type { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto w-full max-w-screen-xl flex-grow">{children}</main>
  );
};
