import type { NextPage } from 'next';

import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

const variableKeys = [
  'NEXT_PUBLIC_VERCEL_ENV',
  'NEXT_PUBLIC_VERCEL_URL',
  'NEXT_PUBLIC_VERCEL_GIT_PROVIDER',
  'NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG',
  'NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER',
  'NEXT_PUBLIC_VERCEL_GIT_REPO_ID',
  'NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF',
  'NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA',
  'NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE',
  'NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
  'NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME',
  'NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID',
];

const ReactUseMemo: NextPage = () => {
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
          {variableKeys.map((key) => (
            <div key={key}>
              {key}: {process.env[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactUseMemo;
