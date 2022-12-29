import type { FC } from 'react';

import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};

export const NavMenuLink: FC<Props> = ({ href, label }) => {
  return (
    <Link
      className='block font-baloo text-xl text-white transition-transform duration-300 hover:scale-110'
      href={href}
    >
      {label}
    </Link>
  );
};
