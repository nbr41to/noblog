import { VFC } from 'react';
import styled from 'styled-components';

type TopicsProps = {
  className?: string;
};

export const Topics: VFC<TopicsProps> = ({ className }) => {
  return (
    <StyledTopics className={`${className}`}>
      <h2>最新のTopics</h2>
      <p>なし</p>
    </StyledTopics>
  );
};

const StyledTopics = styled.div`
  min-height: 120px;
`;
