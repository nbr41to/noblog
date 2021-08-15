import { useEffect, useState, VFC } from 'react';
import { NotionBlock } from 'src/notion/NotionBlock';
import styled from 'styled-components';

type TrendBoardProps = {
  className?: string;
};

export const TrendBoard: VFC<TrendBoardProps> = ({ className }) => {
  const [trendBlocks, setTrendBlocks] = useState([]);

  useEffect(() => {
    fetch('/api/get-blocks')
      .then((res) => res.json())
      .then((data) => {
        setTrendBlocks(data);
      });
  }, []);

  // console.log(trendBlocks);

  return (
    <StyledTrendBoard className={className}>
      <h2>My Trend</h2>
      <div>
        {trendBlocks.map((block) => (
          <NotionBlock key={block.id} block={block} />
        ))}
      </div>
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
`;
