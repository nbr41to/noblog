import { VFC } from 'react';
import styled from 'styled-components';
import {
  YoutubeFill,
  SlackFill,
  Person,
  TwitterFill,
  GithubFill,
  ChatBubble,
  Book,
} from 'akar-icons';
type MyLinksProps = {
  className?: string;
};

export const MyLinks: VFC<MyLinksProps> = ({ className }) => {
  return (
    <StyledMyLinks className={className}>
      <h3>links</h3>
      <div className="link_card my-8 p-8 proglab">
        <div className="title mb-4">
          <SlackFill />
          <h4 className="ml-4">progLab</h4>
        </div>
        <p>僕が運営しているプログラミング学習をサポートするコミュニティ</p>
      </div>
      <div className="link_card my-8 p-8 zenn">
        <div className="title mb-4">
          <Book />
          <h4 className="ml-4">Zenn</h4>
        </div>
        <p>プログラミングに関する記事をアウトプットをしています。</p>
      </div>
      <div className="link_card my-8 p-8 youtube">
        <div className="title mb-4">
          <YoutubeFill />
          <h4 className="ml-4">YouTube</h4>
        </div>
        <p>
          プログラミングの学習内容をわかりやすくしてアウトプットしてるチャンネル
        </p>
      </div>
      <div className="link_card my-8 p-8 mysite">
        <div className="title mb-4">
          <Person />
          <h4 className="ml-4">MySite</h4>
        </div>
        <p>自分のメインサイト</p>
      </div>
      <div className="link_card my-8 p-8 twitter">
        <div className="title mb-4">
          <TwitterFill />
          <h4 className="ml-4">@Knob_nbr41to</h4>
        </div>
        <p>仕事の依頼や、お問い合わせはTwitterのDMにてお願いします。</p>
      </div>
      <div className="link_card my-8 p-8 line">
        <div className="title mb-4">
          <ChatBubble />
          <h4 className="ml-4">公式LINE</h4>
        </div>
        <p>LINEでのお問い合わせはこちら</p>
      </div>
      <div className="link_card my-8 p-8 github">
        <div className="title mb-4">
          <GithubFill />
          <h4 className="ml-4">nbr41</h4>
        </div>
        <p>
          ソースコード置き場。これまでの努力の積み重ねがここに詰まっています。
        </p>
      </div>
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
