import type { FC, ReactNode } from 'react';

import Link from 'next/link';

type Props = {
  href: string;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const NavMenuLink: FC<Props> = ({
  href,
  label,
  leftIcon,
  rightIcon,
}) => {
  return (
    <Link
      className="flex w-fit items-center gap-2 font-baloo text-xl text-white transition-transform duration-300 hover:scale-110 sp:text-2xl"
      href={href}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </Link>
  );
};
