import { VFC } from 'react';
import styled from 'styled-components';
import { MyLinks } from '../Widget/MyLinks';
import { TweetTimeLine } from '../Widget/TweetTimeLine';

type RightProps = {
  className?: string;
};

export const Right: VFC<RightProps> = ({ className }) => {
  return (
    <StyledRight className={className}>
      <MyLinks className="mb-16" />
      <TweetTimeLine />
    </StyledRight>
  );
};

const StyledRight = styled.div`
  ${({ theme }) => theme.box.outer};
  padding: 8px;
`;
