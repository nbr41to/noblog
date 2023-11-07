/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/display-name */

'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import Head from 'next/head';
import { memo, useCallback, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { useNoticeRendering } from '~/hooks/useReanderNotificate';

const ReactUseCallback = () => {
  const [parentState, setParentState] = useState(false);
  const [count, setCount] = useState(0);

  const testFn = () => 'testFn が定義されたときのcount: ' + count;

  const testCallback = useCallback(
    () => 'testCallback が定義されたときのcount: ' + count,
    [],
  );

  useNoticeRendering('ReactUseCallbackPage');

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="React.useCallback" />

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

        <hr />

        <CodeHighlight
          code={`const testFn = () => 'testFn が定義されたときのcount: ' + count;`}
        />
        <div>{testFn()}</div>
        <CodeHighlight
          code={`const testCallbackFn = useCallback(() => 'testCallbackFn が定義されたときのcount: ' + count, []);`}
        />
        <div>{testCallback()}</div>

        <Child count={count} fn={testFn} callback={testCallback} />
        <MemoChild1 count={count} fn={testFn} callback={testCallback} />
        <MemoChild2 count={count} callback={testCallback} />
      </div>
    </div>
  );
};

export default ReactUseCallback;

const Child = (props: any) => {
  useNoticeRendering('Child');

  return (
    <div className="border-box">
      <CodeHighlight
        code={`<Child count={count} fn={testFn} callback={testCallback} />`}
      />
      <div>props.count: {props.count}</div>
      <div>props.count: {props.fn()}</div>
      <div>props.count: {props.callback()}</div>
    </div>
  );
};

const MemoChild1 = memo((props: any) => {
  useNoticeRendering('MemoChild1');

  return (
    <div className="border-box">
      <CodeHighlight
        code={`<MemoChild1 count={count} fn={testFn} callback={testCallback} />`}
      />
      <div>props.count: {props.count}</div>
      <div>props.count: {props.fn()}</div>
      <div>props.count: {props.callback()}</div>
    </div>
  );
});

const MemoChild2 = memo((props: any) => {
  useNoticeRendering('MemoChild2');

  return (
    <div className="border-box">
      <CodeHighlight
        code={`<MemoChild2 count={count} callback={testCallback} />`}
      />
      <div>props.count: {props.count}</div>
      <div>props.count: {props.callback()}</div>
    </div>
  );
});
