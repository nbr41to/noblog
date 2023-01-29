/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import type { NextPage } from 'next';

import { Loader, Skeleton } from '@mantine/core';
import { Prism } from '@mantine/prism';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { PageTitle } from '~/commons/PageTitle';

/* ランダムで文字列を生成する関数 */
const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const N = 8;
const generated = () =>
  Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join('');

const Swr: NextPage = () => {
  /* 仮のDBのデータ */
  const [db, setDb] = useState('abcdefgh');
  const { data, isLoading, isValidating } = useSWR<string>(
    '/api/hello',
    () => {
      /* 遅延 */
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(db);
        }, 2000);
      });
    },
    {
      fallbackData: 'initial', // 初期値
      refreshInterval: 5000,
    }
  );

  useEffect(() => {
    /* 3秒おきにDBを更新 */
    const interval = setInterval(() => {
      setDb(generated());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="SWR" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <Prism language="javascript">{`yarn add swr`}</Prism>

        <div>現在のDBのデータ: {db}（3秒おきに変化させてみる）</div>

        <div className="flex items-center gap-4">
          SWRで取得したデータ:
          {isLoading ? <Skeleton width={92} height={28} /> : <div>{data}</div>}
          {!isLoading && isValidating && <Loader size="xs" />}
        </div>
        <p>5秒おきに再検証をしている</p>
      </div>
    </div>
  );
};

export default Swr;
