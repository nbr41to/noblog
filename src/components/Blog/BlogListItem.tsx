import { VFC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { dateFormated } from '../../utils/dateFormated';

type BlogListItemProps = {
  className?: string;
  item: any;
};

export const BlogListItem: VFC<BlogListItemProps> = ({ className, item }) => {
  const router = useRouter();

  const { properties } = item;
  const title = properties.Page.title[0].plain_text;
  const category = properties.Category.select;
  const subCategory = properties.SubCategory.multi_select;
  const tags = properties.Tags.multi_select;

  return (
    <StyledBlogListItem
      className={`${className}`}
      onClick={() => router.push(`blogs/${category.name}/${item.id}`)}
    >
      <div className="item_header">
        <h3>{title}</h3>
        <p>最終編集日：{dateFormated({ date: item.last_edited_time })}</p>
      </div>
      <div className="item_body">
        <div>メインカテゴリ：{category.name}</div>
        <div>
          サブカテゴリ：
          {subCategory.length
            ? subCategory.map((i) => <span key={i.id}>{i.name}</span>)
            : 'なし'}
        </div>
      </div>
      <div className="item_footer">
        タグ：
        {tags.length ? (
          tags.map((i) => <span key={i.id}>{i.name}</span>)
        ) : (
          <span>なし</span>
        )}
      </div>
    </StyledBlogListItem>
  );
};

const StyledBlogListItem = styled.div`
  border: 2px solid #444;
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #fffc;
  max-width: 600px;

  > .item_header {
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 4px 12px;
    > h3 {
      color: #333;
      font-weight: bold;
    }
    > p {
      min-width: 200px;
      font-size: 14px;
    }
  }
  > .item_body {
    padding: 16px;
  }
  > .item_footer {
    display: flex;
    align-items: center;
    border-top: 1px solid #444;
    padding: 8px 12px 0;
  }
`;
