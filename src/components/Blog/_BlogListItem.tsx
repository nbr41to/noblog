import { useRouter } from 'next/router';
import { useMemo, VFC } from 'react';
import styled from 'styled-components';

import { NotionPageItem } from '@/type/notion';

import { dateFormatted } from '../../utils/dateFormatted';
import { SelectOptionLabel } from './_SelectOptionLabel';

type BlogListItemProps = {
  className?: string;
  item: NotionPageItem;
};

export const BlogListItem: VFC<BlogListItemProps> = ({ className, item }) => {
  const router = useRouter();
  // console.log(item);

  const pageProperties = useMemo(() => {
    const props = { title: '', category: null, tags: [] };
    const { properties } = item;
    if (properties.Title.type === 'title') {
      props.title = properties.Title.title[0].plain_text;
    }
    if (properties.Category.type === 'select') {
      props.category = properties.Category.select;
    }
    if (properties.Tags.type === 'multi_select') {
      props.tags = properties.Tags.multi_select;
    }
    return props;
  }, []);

  return (
    <StyledBlogListItem
      className={`${className}`}
      onClick={() => router.push(`blogs/${item.id}`)}
    >
      <div className="item_header">
        <SelectOptionLabel
          name={pageProperties.category.name}
          color={pageProperties.category.color}
        />
        <div className="date p-4">
          {dateFormatted({ date: item.last_edited_time })}
        </div>
      </div>
      <div className="item_body">
        {item.icon && item.icon.type === 'emoji' ? (
          <div className="icon_emoji m-8">{item.icon.emoji}</div>
        ) : (
          <div className="icon_emoji m-8">📄</div>
        )}
        <h3>{pageProperties.title}</h3>
      </div>
      <div className="item_footer py-8">
        {pageProperties.tags.length &&
          pageProperties.tags.map((tag) => (
            <SelectOptionLabel
              className="m-4"
              key={tag.id}
              name={tag.name}
              color={tag.color}
            />
          ))}
      </div>
    </StyledBlogListItem>
  );
};

const StyledBlogListItem = styled.div`
  border: 4px solid #4444;
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #fffc;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .item_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .date {
      font-size: 12px;
      width: 100%;
      text-align: right;
    }
  }
  > .item_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    > .icon_emoji {
      font-size: 52px;
    }
    > h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #333;
      padding: 12px;
      height: 100%;
      font-weight: bold;
      border-top: 1px solid #2222;
      border-bottom: 1px solid #2222;
    }
  }
  > .item_footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
