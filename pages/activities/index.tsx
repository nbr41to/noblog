import { NextPage } from 'next';
import styled from 'styled-components';

import { MDXWrapper } from '@/components/Activities/MDXWrapper';

const ActivitiesPage: NextPage = () => {
  return (
    <StyledActivitiesPage>
      <MDXWrapper />
    </StyledActivitiesPage>
  );
};

const StyledActivitiesPage = styled.div``;

export default ActivitiesPage;
