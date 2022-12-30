import type { FC } from 'react';

type Props = {
  title: string;
};

export const PageTitle: FC<Props> = ({ title }) => {
  return <h2 className="text-center font-baloo">- {title} -</h2>;
};
