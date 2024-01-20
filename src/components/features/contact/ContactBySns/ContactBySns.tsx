import type { FC } from 'react';

import { clsx } from 'clsx';

import { DummyIcon, LineIcon, TwitterIcon } from '~/commons/icons';

export const ContactBySns: FC = () => {
  return (
    <div className="flex justify-center gap-8">
      <a
        className="relative"
        href="https://lin.ee/iTzRHQR"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* background */}
        <div
          className={clsx(
            'absolute left-0.5 top-0.5',
            'h-20 w-20 rounded-full bg-slate-600',
          )}
        />
        {/* button */}
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-14 w-14 rounded-full bg-slate-400',
            'shadow-[2px_2px_#222c]',
          )}
        />
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-10 w-10 rounded-full bg-green-300',
            'shadow-[inset_2px_2px_3px_#222c,inset_-1px_-1px_2px_#222c]',
          )}
        />
        {/* label cover */}
        <div
          className={clsx(
            'relative h-20 w-20 cursor-pointer rounded-full bg-green-500 text-white',
            'flex items-center justify-center',
            'origin-[40px_6px] transition-transform hover:rotate-12 active:rotate-[120deg]',
          )}
        >
          <LineIcon size={40} />
        </div>
        {/* pin */}
        <div className="absolute right-1/2 top-1 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-slate-300 shadow-sm" />
      </a>

      {/* Twitter */}
      <a
        className="relative"
        href="https://twitter.com/Knob_nbr41to"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* background */}
        <div
          className={clsx(
            'absolute left-0.5 top-0.5',
            'h-20 w-20 rounded-full bg-slate-600',
          )}
        />
        {/* button */}
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-14 w-14 rounded-full bg-slate-400',
            'shadow-[2px_2px_#222c]',
          )}
        />
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-10 w-10 rounded-full bg-sky-300',
            'shadow-[inset_2px_2px_3px_#222c,inset_-1px_-1px_2px_#222c]',
          )}
        />
        {/* label cover */}
        <div
          className={clsx(
            'relative h-20 w-20 cursor-pointer rounded-full bg-sky-500 text-white',
            'flex items-center justify-center',
            'origin-[40px_6px] transition-transform hover:rotate-12 active:rotate-[120deg]',
          )}
        >
          <TwitterIcon size={40} />
        </div>
        {/* pin */}
        <div className="absolute right-1/2 top-1 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-slate-300 shadow-sm" />
      </a>

      {/* Mock */}
      <div className="relative">
        {/* background */}
        <div
          className={clsx(
            'absolute left-0.5 top-0.5',
            'h-20 w-20 rounded-full bg-slate-600',
          )}
        />
        {/* button */}
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-14 w-14 rounded-full bg-slate-400',
            'shadow-[2px_2px_#222c]',
          )}
        />
        <div
          className={clsx(
            'absolute left-[calc(50%+2px)] top-[calc(50%+2px)] -translate-x-1/2 -translate-y-1/2',
            'h-10 w-10 rounded-full bg-orange-300',
            'shadow-[inset_2px_2px_3px_#222c,inset_-1px_-1px_2px_#222c]',
          )}
        />
        {/* label cover */}
        <div
          className={clsx(
            'relative h-20 w-20 cursor-pointer rounded-full bg-orange-500 text-white',
            'flex items-center justify-center',
            'origin-[40px_6px] transition-transform duration-300 hover:rotate-12 active:rotate-[120deg]',
          )}
        >
          <DummyIcon size={40} />
        </div>
        {/* pin */}
        <div className="absolute right-1/2 top-1 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-slate-300 shadow-sm" />
      </div>
    </div>
  );
};
