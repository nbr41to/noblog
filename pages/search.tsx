import algoliasearch from 'algoliasearch/lite';
import { NextPage } from 'next';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import styled from 'styled-components';

import { getChildrenBlocks, getMainBlogList } from '@/apis/notion';

export const getStaticProps = async () => {
  const list = await getMainBlogList();

  const objects = await Promise.all(
    list.map(async (item) => {
      const children = await getChildrenBlocks(item.id);
      const textData = children.filter((block) => block.type === 'paragraph');
      const joinedText = textData
        .map((data) => {
          if (data.type !== 'paragraph') return;
          return data.paragraph.text[0]?.plain_text;
        })
        .join('\n');

      return {
        id: item.id,
        url: `/blogs/${item.id}`,
        title:
          'title' in item.properties.Title
            ? item.properties.Title.title[0].plain_text
            : '',
        content: joinedText,
      };
    }),
  );

  // await createIndex(objects); // algoriaのDBの保存

  return {
    props: {
      list: objects,
    },
  };
};

const HomePage: NextPage = () => {
  const client = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APIKEY}`,
  );

  return (
    <StyledHomePage>
      <InstantSearch indexName="noblog-test" searchClient={client}>
        <SearchBox />
        <Hits
          hitComponent={({ hit }) => {
            return (
              <div>
                <h3>{hit.title}</h3>
                <a href={`${hit.url}`}>記事へ</a>
              </div>
            );
          }}
        />
      </InstantSearch>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 32px;
  ${({ theme }) => theme.media.sp`
    padding: 12px;
  `}

  > .content_wrapper {
    /* display: grid; */
    /* grid-template:
      ' ..... ..... ..... ..... ..... ' 20px
      ' ghg   ghg   ghg   ghg   ghg   ' auto
      ' ..... ..... ..... ..... ..... ' 20px
      ' trend trend trend ..... ttl   ' 800px
      ' ..... ..... ..... ..... ..... ' 20px /
      0 0 1fr 20px 300px; */

    /* ${({ theme }) => theme.media.sp`
      grid-template:
        ' ..... ..... ..... ..... ..... ' 20px
        ' ghg   ghg   ghg   ghg   ghg   ' auto
        ' ..... ..... ..... ..... ..... ' 20px
        ' trend trend trend trend trend ' 600px
        ' ..... ..... ..... ..... ..... ' 20px
        ' ttl   ttl   ttl   ttl   ttl   ' 600px
        ' ..... ..... ..... ..... ..... ' 20px /
        auto;
  `}; */
  }
  .ghg {
    grid-area: ghg;
  }
  .trend {
    grid-area: trend;
  }
  .ttl {
    grid-area: ttl;
  }
`;

export default HomePage;
