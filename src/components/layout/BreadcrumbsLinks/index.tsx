import type { FC } from 'react';

import { Breadcrumbs } from '@mantine/core';
import Link from 'next/link';

type Props = {
  items: {
    title: string;
    href: string;
  }[];
};

export const BreadcrumbsLinks: FC<Props> = ({ items }) => {
  if (items.length === 0) return null; // Homeのみの場合は表示しない

  return (
    <div className="p-2">
      <Breadcrumbs>
        {items.map((item) => (
          <Link
            className="transition hover:text-primary hover:underline"
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
