import { useEffect, useMemo, useState, VFC } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import { NotionBlockCompiler } from '@/components/Notion/NotionBlockCompiler';
import { NotionBlock } from '@/type/notion';

type TrendBoardProps = {
  className?: string;
};

export const TrendBoard: VFC<TrendBoardProps> = ({ className }) => {
  const [trendBlocks, setTrendBlocks] = useState([]);

  /* Notionにある Trend todo のデータを取得 */
  const { data, error } = useSWR<NotionBlock[]>(
    '/api/get-blocks',
    async (key) => {
      const response = await fetch(key, { method: 'GET' });
      const json = await response.json();
      return json;
    },
  );
  const todoList = useMemo(() => {
    if (data) {
      const todoList = data
        .map((block) => {
          if (block.type !== 'to_do' || !block.to_do.text.length) return; // 型ガード
          return {
            done: block.to_do.checked,
            text: block.to_do.text[0].plain_text,
          };
        })
        .filter(Boolean); // 配列のundefinedを削除
      return todoList;
    }
    return [];
  }, [data]);

  return (
    <StyledTrendBoard className={`${className}`}>
      <h3>最近の興味があること / やりたいこと</h3>
      <div className="trend_list">
        {todoList.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span>{todo.text}</span>
          </li>
        ))}
      </div>
      {!data && error && <div>failed to load</div>}
    </StyledTrendBoard>
  );
};

const StyledTrendBoard = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fffc;
  padding: 20px 32px;
  overflow-y: scroll;

  > .trend_list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
    > li {
      display: flex;
      > input[type='checkbox'] {
        margin: 2px 12px 0 0;
        min-width: 20px;
        height: 20px;
        border: 2px solid #bbb;
        border-radius: 4px;
      }
    }
  }
`;
