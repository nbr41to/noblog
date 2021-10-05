import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { getDatabaseInfo } from '@/apis/notion';

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
      <div
        onClick={() => {
          /* 詳細へ移動 */
        }}
      >
        <h3>項目名</h3>
        <p>詳細</p>
      </div>
      <div
        onClick={() => {
          /* 詳細へ移動 */
        }}
      >
        <h3>項目名</h3>
        <p>詳細</p>
      </div>
      <div
        onClick={() => {
          /* 詳細へ移動 */
        }}
      >
        <h3>項目名</h3>
        <p>詳細</p>
      </div>
    </StyledActivitiesPage>
  );
};

const StyledActivitiesPage = styled.div``;

export default ActivitiesPage;
