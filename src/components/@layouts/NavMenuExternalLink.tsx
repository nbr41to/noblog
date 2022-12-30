import type { FC, ReactNode } from 'react';

import { TbExternalLink } from 'react-icons/tb';

type Props = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const NavMenuExternalLink: FC<Props> = ({ href, label, icon }) => {
  return (
    <a
      className="flex items-center gap-2 font-baloo text-xl text-white transition-transform duration-300 hover:scale-110 sp:text-2xl"
      href={href}
    >
      {icon}
      {label}
      <TbExternalLink />
    </a>
  );
};
