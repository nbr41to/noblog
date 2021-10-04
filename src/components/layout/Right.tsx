import { VFC } from 'react';
import styled from 'styled-components';

import { AdsenseSquare } from '../Adsense/AdsenseSquare';
import { Introduction } from '../Widget/Introduction';
import { MyLinks } from '../Widget/MyLinks';
import { TweetTimeLine } from '../Widget/TweetTimeLine';
type RightProps = {
  className?: string;
};

export const Right: VFC<RightProps> = ({ className }) => {
  return (
    <StyledRight className={`${className}`}>
      <Introduction className="mb-16" />
      <TweetTimeLine className="mb-16" />
      <MyLinks className="mb-16" />
      <AdsenseSquare />
    </StyledRight>
  );
};

const StyledRight = styled.aside`
  ${({ theme }) => theme.box.outer};
  padding: 8px;
`;
