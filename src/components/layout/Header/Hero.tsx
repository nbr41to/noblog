import Image from 'next/image';
import { VFC } from 'react';
import styled from 'styled-components';

type HeroProps = {
  className?: string;
};

export const Hero: VFC<HeroProps> = ({ className }) => {
  return (
    <StyledHero className={`${className}`}>
      <Image src="/site_image.png" layout="fill" alt="eye catch" />
    </StyledHero>
  );
};

const StyledHero = styled.div`
  position: relative;
  height: 360px;
  margin: 0 auto;
  position: relative;

  ${({ theme }) => theme.media.sp`
    height: 200px;
  `}

  img {
    object-fit: contain;

    ${({ theme }) => theme.media.sp`
      object-fit: cover;
    `}
  }
`;
