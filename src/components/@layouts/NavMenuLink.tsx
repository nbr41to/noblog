import type { FC, ReactNode } from "react";

import Link from "next/link";

type Props = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const NavMenuLink: FC<Props> = ({ href, label, icon }) => {
  return (
    <Link
      className="flex items-center gap-2 font-baloo text-xl text-white transition-transform duration-300 hover:scale-110"
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
};
