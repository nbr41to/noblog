import Image from 'next/image';
import { useState, VFC } from 'react';
import logo from 'src/assets/images/proglab_logo.png';
import styled from 'styled-components';

type IntroduceProgLabProps = {
  className?: string;
};

export const IntroduceProgLab: VFC<IntroduceProgLabProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledIntroduceProgLab className={`${className}`} isOpen={isOpen}>
      <div className="image_wrapper" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={logo}
          alt="github contributions"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <a
        href="https://proglab.nbr41.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        プログラミング学習コミュニティへの参加者募集中！現在15名ほどで活動中！内定者3名の実績あり！
      </a>
    </StyledIntroduceProgLab>
  );
};

const StyledIntroduceProgLab = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 999px;
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999;
  overflow: hidden;
  max-width: 360px;

  ${({ isOpen }) =>
    isOpen
      ? `
      width: 100%;
      padding: 12px 28px;
      background-color: #f6f6f6cc;
      border: 1px solid #999;
      `
      : `
      width: 84px;
      padding: 12px;
  `};
  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.media.sp`
    right: 6px;
    bottom: 8px;
  `}
  &:hover {
    cursor: pointer;
  }

  > a {
    font-size: 14px;
    padding-left: 12px;
    width: 300px;
    height: 60px;
    text-decoration: underline;
  }
  > .image_wrapper {
    position: relative;
    min-width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;
