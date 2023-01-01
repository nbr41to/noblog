import type { LinkPreviewBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { TbExternalLink } from 'react-icons/tb';

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
        <TbExternalLink size={20} className="pt-0.5" />
        {block.link_preview.url}
      </a>
    </div>
  );
};
