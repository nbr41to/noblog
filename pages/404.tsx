import { VFC } from 'react';
import styled from 'styled-components';

const Custom404: VFC = () => {
  return (
    <StyledCustom404>
      <h3>このページは存在しません🥺</h3>
      <h3>Page Not Found</h3>
    </StyledCustom404>
  );
};

export default Custom404;

const StyledCustom404 = styled.div`
  background-color: #fffc;
  width: 320px;
  height: 200px;
  border: 2px solid #444;
  border-radius: 16px;

  position: absolute;
  inset: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h3 {
    font-weight: bold;
    margin: 16px;
  }
`;
