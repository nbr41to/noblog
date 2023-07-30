import type { FC } from 'react';

import { Kbd } from '@mantine/core';
import { useOs } from '@mantine/hooks';

import { SearchIcon } from '~/commons/icons';

type Props = {
  onClick: () => void;
};
export const SearchButton: FC<Props> = ({ onClick }) => {
  const os = useOs();

  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-slate-800 px-4 py-1.5 font-baloo text-base text-white shadow hover:brightness-125"
      onClick={onClick}
    >
      <SearchIcon size={18} />
      Search
      <Kbd
        className="border-slate-400 bg-slate-800 py-0.5 text-xs text-white"
        color="dark"
      >
        {os === 'windows' ? 'Ctrl' : '⌘'} + K
      </Kbd>
    </button>
  );
};
