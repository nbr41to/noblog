import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { getDatabaseInfo } from '@/apis/notion';
import ActivitiesMdx from '@/markdown/activities.mdx';

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseInfo = await getDatabaseInfo();
    return {
      props: {
        databaseInfo, // _app.tsxで使用
      },
    };
  } catch (error) {
    console.error(error);
  }
};

const ActivitiesPage: NextPage = () => {
  return (
    <StyledActivitiesPage>
      <ActivitiesMdx />
      {/* TODO)MDXのaタグをLinkと別タグで開くに分けたい */}
    </StyledActivitiesPage>
  );
};

const StyledActivitiesPage = styled.div`
  padding: 20px;

  > hr {
    height: 52px;
  }
  > h1 {
    text-align: center;
  }
  > h2 {
    font-style: italic;
    padding: 4px 8px;
    margin: 16px 0;
    border-bottom: 2px solid #4444;
  }
  > h3 {
    padding-left: 8px;
    margin: 16px 0;
    &:before,
    &:after {
      display: inline-block;
      content: '';
      width: 24px;
      height: 1px;
      background: #000;
      margin: 0 8px 6px;
    }
  }
  > h6 {
    /* リンクボタン用 */
    text-align: center;
    margin: 16px 0;
    > a {
      display: inline-block;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 8px 28px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover,
      &:active {
        background-color: #444;
        color: #fff;
      }
    }
  }
  > p {
    margin: 16px 0;
    padding: 0 12px;
    > a {
      font-weight: bold;
      color: #444;
      padding: 0 2px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default ActivitiesPage;
