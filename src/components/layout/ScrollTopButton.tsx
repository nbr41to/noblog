import { FC } from 'react';
import { Affix, Button, Transition } from '@mantine/core';
import { HiArrowCircleUp } from 'react-icons/hi';
import { useWindowScroll } from '@mantine/hooks';

export const ScrollTopButton: FC = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            color='orange'
            leftIcon={<HiArrowCircleUp size={24} />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
};
