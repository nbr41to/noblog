import { useEffect, useState, VFC } from 'react';
import { CompiledBlock } from '../src/components/CompiledBlock';
import Script from 'next/script';
import Image from 'next/image';

const HomePage: VFC = () => {
  const [trendBlocks, setTrendBlocks] = useState([]);

  useEffect(() => {
    fetch('/api/get-blocks')
      .then((res) => res.json())
      .then((data) => {
        setTrendBlocks(data);
      });
  }, []);

  document.getElementsByTagName('body')[0].style.color = '#d4faf2';
  useEffect(() => {
    if (!process.browser) return;
    window.twttr?.widgets.load();
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
      <hr />
      <a
        className="twitter-timeline"
        data-width="400"
        data-height="500"
        data-dnt="true"
        data-theme="light"
        data-interception="off"
        href="https://twitter.com/Knob_nbr41to?ref_src=twsrc%5Etfw"
      >
        Tweets by Knob_nbr41to
      </a>{' '}
      <Image
        src="https://grass-graph.appspot.com/images/nbr41to.png"
        alt="github contributions"
        width={500}
        height={100}
      />
      <Script src="https://platform.twitter.com/widgets.js" />
    </div>
  );
};

export default HomePage;
