import { useMemo, useState, VFC } from 'react';
import styled from 'styled-components';

import { NotionPageItem } from '@/type/notion';

import { BlogListItem } from './_BlogListItem';

type BlogListProps = {
  items: NotionPageItem[];
};

export const BlogList: VFC<BlogListProps> = ({ items }) => {
  const [chunkIndex, setChunkIndex] = useState(0);
  /* チャンク化 */
  const chunkedItems = useMemo(() => {
    const chunkLength = 20;
    const chunks: NotionPageItem[][] = [];
    do {
      const slicedItems = items.slice(
        chunks.length * 20,
        chunks.length * 20 + chunkLength,
      );
      chunks.push(slicedItems);
    } while (chunks.flat().length !== items.length);
    return chunks;
  }, [items]);

  const toNextPage = (): void => {
    setChunkIndex(chunkIndex + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const toPrevPage = (): void => {
    setChunkIndex(chunkIndex - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledBlogList>
      <div className="page_index">
        ページ {`${chunkIndex + 1} / ${chunkedItems.length}`}
      </div>
      <div className="blog_list_items">
        {chunkedItems[chunkIndex].map((item) => (
          <BlogListItem className="m-8" key={item.id} item={item} />
        ))}
      </div>
      <div className="page_index">
        ページ {`${chunkIndex + 1} / ${chunkedItems.length}`}
      </div>
      <div className="pagination_buttons">
        {chunkIndex !== 0 && <button onClick={toPrevPage}>前のページ</button>}
        {chunkIndex !== chunkedItems.length - 1 && (
          <button onClick={toNextPage}>次のページ</button>
        )}
      </div>
    </StyledBlogList>
  );
};

const StyledBlogList = styled.div`
  > .page_index {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .blog_list_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0;
  }
  > .pagination_buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    > button {
      margin: 0 20px;
      text-decoration: underline;
    }
  }
`;
