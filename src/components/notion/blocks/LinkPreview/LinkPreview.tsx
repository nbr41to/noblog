import type { LinkPreviewBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { TbExternalLinkIcon } from '~/commons/icons';

type Props = {
  block: LinkPreviewBlockObjectResponse;
};

export const LinkPreview: FC<Props> = ({ block }) => {
  return (
    <div className="">
      <a
        className="flex items-center gap-1 underline transition-opacity hover:opacity-50"
        href={block.link_preview.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbExternalLinkIcon size={20} className="pt-0.5" />
        {block.link_preview.url}
      </a>
    </div>
  );
};
