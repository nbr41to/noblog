/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';

import { Prism } from '@mantine/prism';
import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

const ReactSvgComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="ReactSvgComponent" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <Prism language="javascript">{`your code`}</Prism>
      </div>
    </div>
  );
};

export default ReactSvgComponent;
