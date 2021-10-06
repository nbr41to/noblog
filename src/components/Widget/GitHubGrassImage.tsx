import Image from 'next/image';
import { VFC } from 'react';
import styled from 'styled-components';

type GitHubGrassImageProps = {
  className?: string;
};

export const GitHubGrassImage: VFC<GitHubGrassImageProps> = ({ className }) => {
  return (
    <StyledGitHubGrassImage className={`${className}`}>
      <h2>GitHubの牧草🐮</h2>
      <div className="image_wrapper">
        <Image
          src="https://grass-graph.appspot.com/images/nbr41to.png"
          alt="github contributions"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </StyledGitHubGrassImage>
  );
};

const StyledGitHubGrassImage = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 24px;
  background-color: #fff;

  > h2 {
    padding-left: 12px;
  }
  > .image_wrapper {
    position: relative;
    width: 100%;
    height: 200px;
  }
`;
