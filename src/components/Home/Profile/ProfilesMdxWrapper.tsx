import React from 'react';
import styled from 'styled-components';

export const ProfilesMdxWrapper: React.FC = ({ children }) => {
  return <StyledProfilesMdxWrapper>{children}</StyledProfilesMdxWrapper>;
};

const StyledProfilesMdxWrapper = styled.div`
  padding: 16px 4px;
  max-width: 500px;
  h3 {
    font-size: 20px;
    font-weight: bold;
    padding: 12px 0;
    padding-left: 12px;
    border-left: 4px solid #666;
    margin: 8px 0;
    background-color: #f1f1f1;
  }
  p {
    margin-bottom: 12px;
    padding: 0 4px;
    line-height: 32px;
  }
`;
