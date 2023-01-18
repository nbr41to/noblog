'server-only';

import { use } from 'react';

import { getTodo } from './getData';

export const ServerComponent = () => {
  const todo = use(getTodo());

  return (
    <div>
      <div>GET TODO</div>
      {todo ? (
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      ) : (
        <div className="">loading...</div>
      )}
    </div>
  );
};
