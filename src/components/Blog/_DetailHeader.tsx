import Image from 'next/image';
import { useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { SelectOptionLabel } from '@/components/Blog/_SelectOptionLabel';
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
        <p>
          カテゴリー：
          <SelectOptionLabel name={category.name} color={category.color} />
        </p>
        <p>
          作成日：
          {created_time}
        </p>
        <p>
          最終編集日：
          {last_edited_time}
        </p>
        <div className="item_footer">
          Tags：
          {tags.length &&
            tags.map((tag) => (
              <SelectOptionLabel
                className="mx-4"
                key={tag.id}
                name={tag.name}
                color={tag.color}
              />
            ))}
        </div>
        <LikeButton className="my-8" id={id} />
      </div>
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
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 2px dotted #444;
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
`;
