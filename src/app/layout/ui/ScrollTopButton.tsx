'use client';

import type { FC } from 'react';

import { Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import { ArrowCircleUpIcon } from '~/commons/icons';

export const ScrollTopButton: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Transition transition="slide-up" mounted={scroll.y > 0}>
      {(transitionStyles) => (
        <Button
          className="shadow dark:bg-slate-100"
          color="dark"
          variant="white"
          leftSection={<ArrowCircleUpIcon size={24} />}
          style={transitionStyles}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </Button>
      )}
    </Transition>
  );
};
