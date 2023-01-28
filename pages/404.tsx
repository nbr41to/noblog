import type { NextPage } from 'next';

import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-8 flex h-80 flex-col items-center justify-center gap-4 bg-slate-800 text-white">
        <h1 className="text-center text-2xl">Not found... (404)</h1>
        <div className="mx-auto w-fit">
          <Button color="orange" onClick={() => router.push('/')}>
            トップに戻る
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
