'use client';
import Head from 'next/head';
import { Suspense } from 'react';

import { ClientComponent } from '@/app/sandbox/next-13-app-dir/ClientComponent';
import { ServerComponent } from '@/app/sandbox/next-13-app-dir/ServerComponent';
import { PageTitle } from '~/commons/PageTitle';

import Loading from './loading';

/* このコンポーネントがServerComponentでかつDataをfetchしているの場合はloading.tsxがLoaderになる */
const Next13AppDir = () => {
  // const todo = await getTodo();
  // const todo = use(getTodo()) // awaitせずにReact.use()を使うことも可能

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Next.js 13 App Directory" />

      <div className="w-main mx-auto mt-8 space-y-3">
        <div>page.tsxで取得したData</div>
        {/* <pre>
          <code>{JSON.stringify(todo, null, 2)}</code>
        </pre> */}

        <div>ClientComponent</div>
        <ClientComponent />

        <div>ServerComponent</div>
        <div>SuspenseによるStreaming</div>
        <Suspense fallback={<Loading />}>
          <ServerComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Next13AppDir;
