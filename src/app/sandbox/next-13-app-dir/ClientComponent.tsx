'use client';

import type { FC } from 'react';

import { useState } from 'react';

export const ClientComponent: FC = () => {
  const [count, setCount] = useState(0);

  // eslint-disable-next-line no-console
  console.log('ClientComponent: count: ', count);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};
