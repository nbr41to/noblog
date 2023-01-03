/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/display-name */

import type { NextPage } from 'next';

import { Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { memo, useCallback, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { useNoticeRendering } from '~/hooks/useReanderNotificate';

const ReactUseCallback: NextPage = () => {
  const [parentState, setParentState] = useState(false);
  const [count, setCount] = useState(0);

  const testFn = () => 'testFn が定義されたときのcount: ' + count;

  const testCallback = useCallback(
    () => 'testCallback が定義されたときのcount: ' + count,
    []
  );

  useNoticeRendering('ReactUseCallbackPage');

  return (
    <div>
      <PageTitle title="React.useCallback" />

      <div className="w-main mx-auto mt-8 space-y-3">
        <Prism language="javascript">
          {`const [parentState, setParentState] = useState(false);
const [count, setCount] = useState(0);`}
        </Prism>

        <div className="space-x-3">
          <Button onClick={() => setParentState(!parentState)}>
            parentState: {parentState.toString()}
          </Button>
          <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
        </div>

        <hr />

        <Prism language="javascript">
          {`const testFn = () => 'testFn が定義されたときのcount: ' + count;`}
        </Prism>
        <div>{testFn()}</div>
        <Prism language="javascript">
          {`const testCallbackFn = useCallback(() => 'testCallbackFn が定義されたときのcount: ' + count, []);`}
        </Prism>
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
      <Prism language="javascript">
        {`<Child count={count} fn={testFn} callback={testCallback} />`}
      </Prism>
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
      <Prism language="javascript">
        {`<MemoChild1 count={count} fn={testFn} callback={testCallback} />`}
      </Prism>
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
      <Prism language="javascript">
        {`<MemoChild2 count={count} callback={testCallback} />`}
      </Prism>
      <div>props.count: {props.count}</div>
      <div>props.count: {props.callback()}</div>
    </div>
  );
});
