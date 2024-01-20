import { Suspense } from 'react';

import { ReadMoreButton } from '~/components/@commons/ReadMoreButton';

import { FetchLatestPosts } from './FetchLatestPosts';

export const LatestPosts = async () => {
  return (
    <div>
      <h2 className="py-4 text-xl font-bold">最新の記事</h2>
      <Suspense fallback={<Skeleton />}>
        <FetchLatestPosts />
      </Suspense>
      <div className="ml-auto w-fit">
        <ReadMoreButton href="/posts" />
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="w-full space-y-3">
    <div className="h-24 animate-pulse rounded bg-slate-300" />
    <div className="h-24 animate-pulse rounded bg-slate-300" />
    <div className="h-24 animate-pulse rounded bg-slate-300" />
    <div className="h-24 animate-pulse rounded bg-slate-300" />
    <div className="h-24 animate-pulse rounded bg-slate-300" />
  </div>
);
