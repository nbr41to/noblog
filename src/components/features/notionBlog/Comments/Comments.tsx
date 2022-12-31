import type { FC } from 'react';
import type { NotionCommentObjectResponse } from '~/types/notion';

import { RichText } from '~/components/notion/RichText';

type Props = {
  comments: NotionCommentObjectResponse[];
};

export const Comments: FC<Props> = ({ comments }) => {
  return (
    <div>
      <h3 className="text-center font-baloo">- Comments -</h3>
      <div className="mt-3 space-y-2 rounded bg-white p-6">
        {comments.map((comment) => (
          <div key={comment.id} className="">
            <div className="text-right text-xs">{comment.created_time}</div>
            <div className="rounded border border-solid py-3 px-6 text-sm">
              <RichText text={comment.rich_text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
