import {
  Book,
  ChatBubble,
  GithubFill,
  Person,
  SlackFill,
  TwitterFill,
  YoutubeFill,
} from 'akar-icons';
import { VFC } from 'react';
import styled from 'styled-components';
type MyLinksProps = {
  className?: string;
};

export const MyLinks: VFC<MyLinksProps> = ({ className }) => {
  return (
    <StyledMyLinks className={className}>
      <h3>links</h3>
      <a
        className="link_card my-8 p-8 proglab"
        href="https://proglab.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <SlackFill />
          <h4 className="ml-4">progLab</h4>
        </div>
        <p>僕が運営しているプログラミング学習をサポートするコミュニティ</p>
      </a>
      <a
        className="link_card my-8 p-8 zenn"
        href="https://zenn.dev/nbr41to"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <Book />
          <h4 className="ml-4">Zenn</h4>
        </div>
        <p>プログラミングに関する記事をアウトプットをしています。</p>
      </a>
      <a
        className="link_card my-8 p-8 youtube"
        href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <YoutubeFill />
          <h4 className="ml-4">YouTube</h4>
        </div>
        <p>
          プログラミングの学習内容をわかりやすくしてアウトプットしてるチャンネル
        </p>
      </a>
      <a
        className="link_card my-8 p-8 mysite"
        href="https://nbr41.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <Person />
          <h4 className="ml-4">MySite</h4>
        </div>
        <p>自分のメインサイト</p>
      </a>
      <a
        className="link_card my-8 p-8 twitter"
        href="https://twitter.com/Knob_nbr41to"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <TwitterFill />
          <h4 className="ml-4">@Knob_nbr41to</h4>
        </div>
        <p>仕事の依頼や、お問い合わせはTwitterのDMにてお願いします。</p>
      </a>
      <a
        className="link_card my-8 p-8 line"
        href="https://lin.ee/iTzRHQR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <ChatBubble />
          <h4 className="ml-4">公式LINE</h4>
        </div>
        <p>LINEでのお問い合わせはこちら</p>
      </a>
      <a
        className="link_card my-8 p-8 github"
        href="https://github.com/nbr41to"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="title mb-4">
          <GithubFill />
          <h4 className="ml-4">nbr41</h4>
        </div>
        <p>
          ソースコード置き場。これまでの努力の積み重ねがここに詰まっています。
        </p>
      </a>
    </StyledMyLinks>
  );
};

const StyledMyLinks = styled.div`
  h3 {
    ${({ theme }) => theme.mixins.asideTitle};
  }
  min-height: 280px;
  overflow-y: scroll;
  .link_card {
    display: block;
    border-radius: 8px;
    color: white;
    cursor: pointer;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      > h4 {
        text-align: center;
      }
    }
    > p {
      font-size: 12px;
      text-align: center;
    }
    &:active {
      transform: scale(0.96);
    }
    &.youtube {
      background-color: tomato;
    }
    &.proglab {
      background-color: orange;
    }
    &.mysite {
      background-color: #3549fc;
    }
    &.twitter {
      background-color: #00bfff;
    }
    &.github {
      background-color: #000000;
    }
    &.line {
      background-color: limegreen;
    }
    &.zenn {
      background-color: #3ea8ff;
    }
  }
`;
