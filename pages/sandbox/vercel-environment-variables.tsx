import type { NextPage } from 'next';

import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

const ReactUseMemo: NextPage = () => {
  // eslint-disable-next-line no-console
  console.log('NEXT_PUBLIC_VERCEL_URL', process.env['NEXT_PUBLIC_VERCEL_URL']);

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Vercel Environment Variables" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <a
          href="https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>

        <div>
          <div>client</div>
          <div>
            NEXT_PUBLIC_VERCEL_ENV: {process.env.NEXT_PUBLIC_VERCEL_ENV}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_URL: {process.env.NEXT_PUBLIC_VERCEL_URL}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_PROVIDER:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_REPO_ID:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_ID}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME}
          </div>
          <div>
            NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID:{' '}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactUseMemo;
