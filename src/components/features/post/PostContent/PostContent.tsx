import type { FC } from "react";
import type { NotionBlockObjectResponse } from "~/types/notion";

import { blockToJsx } from "~/components/notion/blockToJsx";

type Props = {
  blocks: NotionBlockObjectResponse[];
};

export const PostContent: FC<Props> = ({ blocks }) => {
  return (
    <div className="rounded bg-white px-10 py-8">
      {blocks.map((block) => (
        <div key={block.id}>{blockToJsx(block)}</div>
      ))}
    </div>
  );
};
