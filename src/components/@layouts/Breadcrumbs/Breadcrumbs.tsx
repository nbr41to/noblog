import type { FC } from "react";

import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import Link from "next/link";

type Props = {
  items: {
    title: string;
    href: string;
  }[];
};

export const Breadcrumbs: FC<Props> = ({ items }) => {
  if (items.length === 0) return null; // Homeのみの場合は表示しない

  return (
    <div className="p-2">
      <MantineBreadcrumbs>
        {items.map((item) => (
          <Link
            className="font-bold text-slate-800 hover:underline sp:text-sm"
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
