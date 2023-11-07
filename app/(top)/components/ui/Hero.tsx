'use client';

import type { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className="mt-2 w-full bg-slate-800 py-8 text-orange-100">
      <div className="mx-auto w-fit text-right">
        <div className="font-sans text-4xl font-bold sp:text-3xl">
          Obedience to Curiosity
        </div>
        <div className="mt-1 font-sans text-sm">好奇心に従順に生きる</div>
      </div>
    </div>
  );
};
