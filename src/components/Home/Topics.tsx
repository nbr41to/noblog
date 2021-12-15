import { VFC } from 'react';
import styled from 'styled-components';

import { TrendBoard } from '../Widget/TrendBoard';

type TopicsProps = {
  className?: string;
};

export const Topics: VFC<TopicsProps> = ({ className }) => {
  return (
    <StyledTopics className={`${className}`}>
      <h2>最新のTopics</h2>
      <div className="my-16">
        <TrendBoard />
      </div>
    </StyledTopics>
  );
};

const StyledTopics = styled.div`
  min-height: 120px;
`;
