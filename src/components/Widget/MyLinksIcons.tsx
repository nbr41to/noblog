import { VFC } from 'react';
import styled from 'styled-components';

import GitHubIcon from '../../assets/contact_icon/GitHub_icon.svg';
import LineIcon from '../../assets/contact_icon/LINE_Brand_icon.svg';
import TwitterIcon from '../../assets/contact_icon/Twitter_icon.svg';
import YouTubeIcon from '../../assets/contact_icon/YouTube_icon.svg';

type MyLinksIconsProps = {
  className?: string;
};

export const MyLinksIcons: VFC<MyLinksIconsProps> = ({ className }) => {
  return (
    <StyledMyLink className={`${className}`}>
      <h2>Contact</h2>
      <div className="sns_icon_container">
        <a
          className="icon twitter"
          href="https://twitter.com/Knob_nbr41to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          className="icon github"
          href="https://github.com/prog-learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="icon youtube"
          href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
        <a
          className="icon"
          href="https://lin.ee/JYDAgcH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LineIcon />
        </a>
      </div>
    </StyledMyLink>
  );
};

const StyledMyLink = styled.div`
  ${({ theme }) => theme.box.inner};
  padding: 8px;
  .sns_icon_container {
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > .icon {
      cursor: pointer;
      > svg {
        width: 80px;
        padding: 2.5px;
      }
    }
    > .twitter {
      > svg {
        width: 80px;
        padding: 12.5px;
        fill: #1da1f2;
      }
    }
    > .youtube,
    .github {
      > svg {
        width: 80px;
        padding: 12.5px;
      }
    }
  }
`;
