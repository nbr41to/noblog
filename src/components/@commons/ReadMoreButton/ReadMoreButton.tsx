import type { FC } from 'react';

import { clsx } from '@mantine/core';
import Link from 'next/link';

type Props = {
  href: string;
  blank?: boolean;
};

export const ReadMoreButton: FC<Props> = ({ href, blank }) => {
  const blankProps = blank ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Link
      className={clsx(
        'inline-block font-baloo text-sm leading-none text-slate-800',
        'transition-transform duration-300 hover:scale-110'
      )}
      href={href}
      {...blankProps}
    >
      ... read more
    </Link>
  );
};
