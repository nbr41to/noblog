import type { Heading1BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { RichText } from '~/components/notion/RichText';

type Props = {
  block: Heading1BlockObjectResponse;
};

export const Heading1: FC<Props> = ({ block }) => {
  return (
    <h1 className="my-2 text-2xl sp:text-lg">
      <RichText text={block.heading_1.rich_text} />
    </h1>
  );
};
