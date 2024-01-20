'use client';

import type { FC, ReactNode } from 'react';

import Link from 'next/link';

import { TbExternalLinkIcon } from '~/commons/icons';

type Props = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const NavMenuExternalLink: FC<Props> = ({ href, label, icon }) => {
  return (
    <Link
      className="flex w-fit items-center gap-2 font-baloo text-xl text-white transition-transform duration-300 hover:scale-110 sp:text-2xl"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {label}
      <TbExternalLinkIcon />
    </Link>
  );
};
