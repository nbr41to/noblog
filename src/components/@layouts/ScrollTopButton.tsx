import type { FC } from 'react';

import { Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { HiArrowCircleUp } from 'react-icons/hi';

export const ScrollTopButton: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Transition transition="slide-up" mounted={scroll.y > 0}>
      {(transitionStyles) => (
        <Button
          className="shadow"
          color="orange"
          leftIcon={<HiArrowCircleUp size={24} />}
          style={transitionStyles}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </Button>
      )}
    </Transition>
  );
};
