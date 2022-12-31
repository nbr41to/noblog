import type { FC } from 'react';
import type { NotionPostMeta } from '~/types/notion';

import { Badge, Button } from '@mantine/core';
import { BsHeart } from 'react-icons/bs';

type Props = {
  meta: NotionPostMeta;
  commentCount: number;
};

export const PostMeta: FC<Props> = ({ meta, commentCount }) => {
  return (
    <div className="space-y-2 bg-white py-4 px-6 text-sm">
      <div className="flex justify-between">
        <div className="space-y-1">
          <div>公開: {meta.date}</div>
          <div>更新: {meta.updatedAt}</div>
        </div>
        <div className="space-y-1 text-right">
          <div>いいね: {meta.likes} 件</div>
          <div>コメント: {commentCount} 件</div>
        </div>
      </div>

      <div className="py-2">
        <Button color="orange" leftIcon={<BsHeart size={18} />} fullWidth>
          この記事にいいねする
        </Button>
      </div>

      <div className="font-bold">
        カテゴリ:{' '}
        <Badge color="orange" className=" lowercase">
          {meta.category}
        </Badge>
      </div>
      <div className="space-x-1 space-y-1 font-bold">
        タグ:{' '}
        {meta.tags.map((tag) => (
          <Badge key={tag.id} className=" lowercase">
            {tag.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
