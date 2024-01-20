'use client';

import type { FC } from 'react';

import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type Props = {
  titleEnum?: {
    [key: string]: string;
  };
};

const excludePaths = ['/', '/404'];

export const Breadcrumbs: FC<Props> = ({ titleEnum = {} }) => {
  const currentPath = usePathname() || '/';

  const items = useMemo(() => {
    if (excludePaths.includes(currentPath)) return [];

    const paths = currentPath.split('#')[0].split('/');
    const items = paths.map((path, index) => {
      const href = paths.slice(0, index + 1).join('/') || '/';
      const title = titleEnum[path] || path || 'home';

      return {
        title,
        href,
      };
    });

    return items;
  }, [currentPath, titleEnum]);

  if (items.length === 0) return null;

  return (
    <div className="py-4 text-sm">
      <MantineBreadcrumbs>
        {items.map((item) => (
          <Link
            className="font-bold text-slate-800 transition-colors hover:text-slate-500 hover:underline"
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </MantineBreadcrumbs>
    </div>
  );
};
