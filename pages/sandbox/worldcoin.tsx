/* eslint-disable react-hooks/exhaustive-deps */

import type { CredentialType, ISuccessResult } from '@worldcoin/idkit';
import type { NextPage } from 'next';

import { CodeHighlight } from '@mantine/code-highlight';
import { IDKitWidget } from '@worldcoin/idkit';
import Head from 'next/head';
import { useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

const Worldcoin: NextPage = () => {
  const [result, setResult] = useState<ISuccessResult>();

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Worldcoin" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <a href="https://docs.worldcoin.org/" target="_blank" rel="noreferrer">
          Worldcoin Developer Docs
        </a>
        <CodeHighlight
          code={` <IDKitWidget
      app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
      action="vote_1" // this is your action name from the Developer Portal
      signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
      onSuccess={onSuccess}
      credential_types={['orb', 'phone']} // the credentials you want to accept
      enableTelemetry
    >
      {({ open }) => <button onClick={open}>Verify with World ID</button>}
    </IDKitWidget>`}
        />
        <IDKitWidget
          app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
          action="vote_1" // this is your action name from the Developer Portal
          signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
          onSuccess={(response: ISuccessResult) => {
            setResult(response);
          }}
          credential_types={['orb', 'phone'] as CredentialType[]} // the credentials you want to accept
          enableTelemetry
        >
          {({ open }) => <button onClick={open}>Verify with World ID</button>}
        </IDKitWidget>
        {result && (
          <>
            <div>ISuccessResult</div>
            <CodeHighlight code={JSON.stringify(result, null, 2)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Worldcoin;
