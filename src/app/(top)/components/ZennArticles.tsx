import { Suspense } from 'react';

import { ReadMoreButton } from '~/components/@commons/ReadMoreButton';

import { FetchZennArticles } from './FetchZennArticles';

export const ZennArticles = async () => {
  return (
    <div>
      <h2 className="py-4 text-xl font-bold">最新のZennの記事</h2>
      <Suspense fallback={<Skeleton />}>
        <FetchZennArticles />
      </Suspense>
      <div className="ml-auto w-fit">
        <ReadMoreButton href="/zenn" />
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="w-full space-y-2">
    <div className="h-[52px] animate-pulse rounded bg-slate-300" />
    <div className="h-[52px] animate-pulse rounded bg-slate-300" />
    <div className="h-[52px] animate-pulse rounded bg-slate-300" />
    <div className="h-[52px] animate-pulse rounded bg-slate-300" />
    <div className="h-[52px] animate-pulse rounded bg-slate-300" />
  </div>
);
