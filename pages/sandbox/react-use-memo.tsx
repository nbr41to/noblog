/* eslint-disable react-hooks/exhaustive-deps */

import type { NextPage } from 'next';

import { Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { useMemo, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

const ReactUseMemo: NextPage = () => {
  const [count, setCount] = useState(0);

  const testConst = 'testConst が定義されたときのcount: ' + count;

  const testFn = () => 'testFn が定義されたときのcount: ' + count;

  const testMemo = useMemo(
    () => 'testMemo が定義されたときのcount: ' + count,
    []
  );

  return (
    <div>
      <PageTitle title="React.useMemo" />
      <div className="w-main mt-8 space-y-3">
        <Button onClick={() => setCount(count + 1)}>count: {count}</Button>

        <Prism language="javascript">
          {`const testConst = 'testConst が定義されたときのcount: ' + count;`}
        </Prism>
        <div>{testConst}</div>
        <Prism language="javascript">
          {`const testFn = () => 'testFn が定義されたときのcount: ' + count;`}
        </Prism>
        <div>{testFn()}</div>
        <Prism language="javascript">
          {`const testMemo = useMemo(() => 'testMemo が定義されたときのcount: ' + count, []);`}
        </Prism>
        <div>{testMemo}</div>
      </div>
    </div>
  );
};

export default ReactUseMemo;
