import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  title: string;
};
export const NavMenuLink = ({ href, icon, title }: Props) => {
  return (
    <Link
      href={href}
      className="flex size-20 flex-none flex-col items-center justify-center rounded bg-gray-200 font-bold dark:bg-gray-800"
    >
      {icon}
      <div>{title}</div>
    </Link>
  );
};
