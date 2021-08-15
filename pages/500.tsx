import { VFC } from 'react';
import styled from 'styled-components';

const Custom500: VFC = () => {
  return (
    <StyledCustom500>
      <h3>サーバーでエラーが発生しました🥺</h3>
      <h3>Server-side error occurred</h3>
    </StyledCustom500>
  );
};

export default Custom500;

const StyledCustom500 = styled.div`
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
