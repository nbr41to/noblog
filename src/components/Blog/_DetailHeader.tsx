import Image from 'next/image';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { SelectOptionButton } from '@/components/Blog/_SelectOptionButton';
import { NotionSelectOption } from '@/type/notion';

import { LikeButtonArea } from './_LikeButton';

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
            label={category.name}
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
                label={tag.name}
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
        <LikeButtonArea className="my-8" id={id} />
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
    padding-bottom: 16px;
    border-bottom: 2px dotted #444;
    text-align: right;

    > .category_tags_buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
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
