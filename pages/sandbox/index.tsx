import type { InferGetStaticPropsType, NextPage } from 'next';

import { Select } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { getFileNames } from '~/server/utils/getFileNames';

export const getStaticProps = async () => {
  const paths = getFileNames('./pages/sandbox', ['index']);

  return {
    props: {
      paths: {
        pages: paths,
      },
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SandboxIndex: NextPage<Props> = ({ paths }) => {
  const router = useRouter();
  const selectRef = useRef<HTMLInputElement>(null);
  const onChange = (value: string | null) => {
    if (!value) return;
    router.push(`/sandbox/${value}`);
  };

  /* SelectをFocus */
  useEffect(() => {
    if (!selectRef.current) return;
    selectRef.current.focus();
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="w-main mx-auto space-y-8 px-4">
        <PageTitle title="Sandbox" />
        <Select
          ref={selectRef}
          tabIndex={0}
          className="mx-auto w-80"
          label="Select page"
          placeholder="Pick one"
          searchable
          data={[...paths.pages.map((path) => ({ value: path, label: path }))]}
          onChange={onChange}
        />

        <div>
          <h3 className="font-baloo text-2xl">pages -</h3>
          <div className="w-main mx-auto mt-8 space-y-2">
            {paths.pages.map((path) => (
              <Link
                key={path}
                href={`/sandbox/${path}`}
                className="block w-fit rounded-full px-4 py-2 font-baloo text-xl text-slate-800 transition-transform duration-300 hover:scale-105 hover:bg-orange-200"
              >
                {path}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SandboxIndex;
