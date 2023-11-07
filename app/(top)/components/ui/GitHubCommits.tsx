'use client';

import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { GitHubIcon } from '~/components/@commons/icons';

export const GitHubCommits: FC = () => {
  return (
    <div>
      <h2 className="flex items-center gap-1 text-lg font-bold">
        <GitHubIcon size={20} />
        GitHubの草w
      </h2>
      <Link
        href="https://github.com/nbr41to"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-101 relative mx-auto block h-32 w-full cursor-pointer transition-transform duration-300 sp:h-20"
      >
        <Image
          className="h-full w-full object-contain"
          src="https://github-contributions-api.deno.dev/nbr41to.svg?no-legend=true&no-total=true&scheme=blue"
          alt="GitHub Contributions"
          fill
          sizes="800px"
          priority
          unoptimized
        />
      </Link>
    </div>
  );
};
