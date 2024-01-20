import type { FC, ReactNode } from 'react';

import { clsx } from 'clsx';
import Link from 'next/link';

type Props = {
  href: string;
  blank?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const ReadMoreButton: FC<Props> = ({
  href,
  blank,
  leftIcon,
  rightIcon,
}) => {
  const blankProps = blank ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Link
      className={clsx(
        'w-fit py-3 font-baloo leading-none',
        'flex items-end gap-1',
        'transition-transform duration-300 hover:scale-110',
      )}
      href={href}
      {...blankProps}
    >
      {leftIcon}
      ... read more
      {rightIcon}
    </Link>
  );
};
