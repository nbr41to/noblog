import { useEffect, useState, VFC } from 'react';
import { CompiledBlock } from '../src/components/CompiledBlock';

const HomePage: VFC = () => {
  const [trendBlocks, setTrendBlocks] = useState([]);

  useEffect(() => {
    fetch('/api/get-blocks')
      .then((res) => res.json())
      .then((data) => {
        setTrendBlocks(data);
      });
  }, []);

  return (
    <div>
      <h1>Top Page</h1>
      <h2>My Trend</h2>
      <div>
        {trendBlocks.map((block) => (
          <CompiledBlock key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
