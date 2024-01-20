/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';

import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import Head from 'next/head';
import { useMemo, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

const ReactUseMemo: NextPage = () => {
  const [count, setCount] = useState(0);

  const testConst = 'testConst が定義されたときのcount: ' + count;

  const testFn = () => 'testFn が定義されたときのcount: ' + count;

  const testMemo = useMemo(
    () => 'testMemo が定義されたときのcount: ' + count,
    [],
  );

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="React.useMemo" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <Button onClick={() => setCount(count + 1)}>count: {count}</Button>

        <CodeHighlight
          code={`const testConst = 'testConst が定義されたときのcount: ' + count;`}
        />
        <div>{testConst}</div>
        <CodeHighlight
          code={`const testFn = () => 'testFn が定義されたときのcount: ' + count;`}
        />
        <div>{testFn()}</div>
        <CodeHighlight
          code={`const testMemo = useMemo(() => 'testMemo が定義されたときのcount: ' + count, []);`}
        />
        <div>{testMemo}</div>
      </div>
    </div>
  );
};

export default ReactUseMemo;
