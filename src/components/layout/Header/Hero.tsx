import Image from 'next/image';
import { VFC } from 'react';
import styled from 'styled-components';

type HeroProps = {
  className?: string;
  visibleHero: boolean;
};

export const Hero: VFC<HeroProps> = ({ className, visibleHero }) => {
  return (
    <StyledHero className={`${className}`} visibleHero={visibleHero}>
      <Image
        src="/site_image.png"
        alt="eye catch"
        layout="fill"
        objectFit="cover"
      />
    </StyledHero>
  );
};

const StyledHero = styled.div<{ visibleHero: boolean }>`
  position: relative;
  width: 768px;
  height: ${(props) => (props.visibleHero ? '320px' : '0')};
  margin: 0 auto;
  position: relative;
  transition: all 0.4s;

  ${({ theme, visibleHero }) => theme.media.sp`
    width: 100%;
    height: ${visibleHero ? '200px' : '0'};
  `}
`;
