/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import type { NextPage } from 'next';

import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import Head from 'next/head';
import { memo, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { useNoticeRendering } from '~/hooks/useReanderNotificate';

const ReactMemo: NextPage = () => {
  const [parentState, setParentState] = useState(false);
  const [count, setCount] = useState(0);

  useNoticeRendering('ReactMemoPage');

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="React.memo" />

      <div className="w-main mx-auto mt-8 space-y-3">
        <CodeHighlight
          code={`const [parentState, setParentState] = useState(false);
const [count, setCount] = useState(0);`}
        />

        <div className="space-x-3">
          <Button onClick={() => setParentState(!parentState)}>
            parentState: {parentState.toString()}
          </Button>
          <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
        </div>

        <Child count={count} />
        <MemoChild count={count} />
      </div>
    </div>
  );
};

export default ReactMemo;

const Child = (props: any) => {
  useNoticeRendering('Child');

  return (
    <div className="border-box">
      <CodeHighlight code={`<Child count={count} />`} />
      <div>props.count: {props.count}</div>
    </div>
  );
};

const MemoChild = memo((props: any) => {
  useNoticeRendering('MemoChild');

  return (
    <div className="border-box">
      <CodeHighlight code={`<MemoChild count={count} />`} />
      <div>props.count: {props.count}</div>
    </div>
  );
});
