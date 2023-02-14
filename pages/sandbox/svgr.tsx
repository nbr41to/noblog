/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';

import { Prism } from '@mantine/prism';
import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

import SvgComponent from '../../public/makoto.svg';

const Svgr: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="@svgr/webpackでSVGをコンポーネント化する" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <a
          href="https://react-svgr.com/docs/next/"
          target="_blank"
          rel="noreferrer"
        >
          https://react-svgr.com/docs/next/
        </a>
        <Prism language="javascript">{`// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}`}</Prism>
        <Prism language="javascript">{`import SvgComponent from '../../public/makoto.svg';
  ...
  <SvgComponent />`}</Prism>
        <SvgComponent />
      </div>
    </div>
  );
};

export default Svgr;
