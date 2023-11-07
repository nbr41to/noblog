'use client';

import type { FC } from 'react';

import { Kbd } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { spotlight } from '@mantine/spotlight';

import { SearchIcon } from '~/commons/icons';

export const SearchButton: FC = () => {
  const os = useOs();

  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-slate-800 px-4 py-1.5 font-baloo text-base text-white shadow hover:brightness-125"
      tabIndex={0}
      onClick={spotlight.open}
    >
      <SearchIcon size={18} />
      Search
      <Kbd size="xs">{os === 'windows' ? 'Ctrl' : '⌘'} + K</Kbd>
    </button>
  );
};
