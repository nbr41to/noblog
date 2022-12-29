import type { InferGetStaticPropsType, NextPage } from 'next';

import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

import { getFileNames } from '@/server/utils/getFileNames';

export const getStaticProps = async () => {
  const paths = getFileNames('./pages/sandbox', ['index']);

  return { props: { paths } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ paths }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Sandbox</h1>
      {paths.map((path) => (
        <Button key={path} onClick={() => router.push('/sandbox/' + path)}>
          {path}
        </Button>
      ))}
    </div>
  );
};

export default Home;
