import { NextPage } from 'next';
import styled from 'styled-components';

import { MDXWrapper } from '@/components/MDXWrapper';
import ActivitiesMdx from '@/markdown/activities.mdx';

const ActivitiesPage: NextPage = () => {
  return (
    <StyledActivitiesPage>
      <MDXWrapper>
        <ActivitiesMdx />
      </MDXWrapper>
    </StyledActivitiesPage>
  );
};

const StyledActivitiesPage = styled.div``;

export default ActivitiesPage;
