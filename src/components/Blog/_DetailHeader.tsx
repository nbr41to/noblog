import Image from 'next/image';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { SelectOptionButton } from '@/components/Blog/_SelectOptionButton';
import { NotionSelectOption } from '@/type/notion';

import { LikeButton } from './_LikeButton';

type DetailHeaderProps = {
  className?: string;
  id: string;
  title: string;
  icon: string;
  cover_url: string;
  created_time: string;
  last_edited_time: string;
  category: NotionSelectOption;
  tags: NotionSelectOption[];
};

export const DetailHeader: VFC<DetailHeaderProps> = ({
  className,
  id,
  title,
  icon,
  cover_url,
  created_time,
  last_edited_time,
  category,
  tags,
}) => {
  const router = useRouter();

  return (
    <StyledDetailHeader className={`${className}`}>
      <div className="icon">{icon}</div>
      <h1>{title}</h1>
      {cover_url && (
        <div className="cover">
          <Image
            src={cover_url}
            layout="fill"
            objectFit="contain"
            alt="cover image"
          />
        </div>
      )}
      <div className="info">
        <div className="category_tags_buttons">
          <SelectOptionButton
            className="m-4"
            name={category.name}
            color={category.color}
            onClick={() => {
              router.push({
                pathname: '/blogs',
                query: { categoryId: category.id },
              });
            }}
          />
          {tags.length &&
            tags.map((tag) => (
              <SelectOptionButton
                className="m-4"
                key={tag.id}
                name={tag.name}
                color={tag.color}
                onClick={() => {
                  router.push({
                    pathname: '/blogs',
                    query: { tagId: tag.id },
                  });
                }}
              />
            ))}
        </div>
        <LikeButton className="my-8" id={id} />
      </div>
      <p>
        🕒 この記事は<span>{created_time}</span>に作成され、
        <span>{last_edited_time}</span>
        に編集されました。
      </p>
    </StyledDetailHeader>
  );
};

const StyledDetailHeader = styled.div`
  > .icon {
    font-size: 100px;
    text-align: center;
  }
  > .cover {
    height: 280px;
    margin: 0 auto 16px;
    position: relative;
    img {
      display: block;
    }
  }
  > h1 {
    text-align: center;
    margin: 4px 0 16px;
  }
  > .info {
    text-align: right;
    padding-bottom: 16px;
    border-bottom: 2px dotted #444;

    > .category_tags_buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    > .like_button {
      border: 1px solid #444;
      border-radius: 8px;
      background: palegreen;
      padding: 2px 12px;
      cursor: pointer;
      &:hover {
        transform: scale(0.98);
      }
      &:active {
        transform: scale(0.96);
        filter: brightness(0.8);
      }
      &:disabled {
        background: #ccc;
      }
    }
  }

  > p {
    margin-top: 12px;
    text-align: right;

    > span {
      margin: 0 4px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
