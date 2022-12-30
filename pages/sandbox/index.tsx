import type { InferGetStaticPropsType, NextPage } from 'next';

import Link from 'next/link';

import { PageTitle } from '@/components/@commons/PageTitle';
import { getFileNames } from '@/server/utils/getFileNames';

export const getStaticProps = async () => {
  const paths = getFileNames('./pages/sandbox', ['index']);

  return { props: { paths } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SandboxIndex: NextPage<Props> = ({ paths }) => {
  return (
    <div>
      <PageTitle title='Sandbox' />
      <div className='w-main mt-8 space-y-4 text-center'>
        {paths.map((path) => (
          <Link
            key={path}
            href={'/sandbox/' + path}
            className='block font-baloo text-xl text-slate-800 transition-transform duration-300 hover:scale-105'
          >
            {path}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SandboxIndex;
