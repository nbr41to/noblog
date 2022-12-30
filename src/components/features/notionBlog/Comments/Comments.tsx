import type { FC } from "react";
import type { NotionCommentObjectResponse } from "~/types/notion";

import { RichText } from "~/components/notion/RichText";

type Props = {
  comments: NotionCommentObjectResponse[];
};

export const Comments: FC<Props> = ({ comments }) => {
  return (
    <div className="">
      <h3 className="font-baloo">- Comments -</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <RichText text={comment.rich_text} />
          </div>
        ))}
      </div>
    </div>
  );
};
