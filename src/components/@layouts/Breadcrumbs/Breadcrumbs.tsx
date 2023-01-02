import type { FC } from 'react';

import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import Link from 'next/link';
import { useMemo } from 'react';

type Props = {
  currentPath: string;
  titleEnum?: {
    [key: string]: string;
  };
};

export const Breadcrumbs: FC<Props> = ({ currentPath, titleEnum = {} }) => {
  const items = useMemo(() => {
    if (currentPath === '/') return []; // home page

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
