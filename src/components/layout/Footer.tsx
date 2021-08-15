import { OctocatFill, TwitterFill, YoutubeFill } from 'akar-icons';
import { VFC } from 'react';
import styled from 'styled-components';

type FooterProps = {
  className?: string;
};

export const Footer: VFC<FooterProps> = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <div className="footer_container">
        <div className="copyright">copyright 2021 by nob</div>
        <OctocatFill size={20} />
        <TwitterFill size={20} />
        <YoutubeFill size={20} />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.7);
  text-align: center;
  padding: 12px;

  position: absolute;
  left: 0;
  bottom: 0;

  > .footer_container {
    display: flex;
    justify-content: center;
    align-items: center;
    > .copyright {
      margin-right: 8px;
    }
    > svg {
      margin: 0 4px;
      cursor: pointer;
    }
  }
`;
