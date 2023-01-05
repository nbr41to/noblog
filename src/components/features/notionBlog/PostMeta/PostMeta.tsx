import type { FC } from 'react';
import type { NotionPostMeta } from '~/types/notion';

import { Badge, Button } from '@mantine/core';
import { useState } from 'react';

import { HeartIcon } from '~/commons/icons';
import { useLikes } from '~/hooks/apiHooks/useLikes';
import { notionColorToMantineColor } from '~/utils/color';

type Props = {
  meta: NotionPostMeta;
  commentCount: number;
};

export const PostMeta: FC<Props> = ({ meta, commentCount }) => {
  const [liked, setLiked] = useState(false);
  const { data: likes, trigger, isMutating } = useLikes(meta.id);

  return (
    <div className="space-y-2 bg-white py-4 px-6 text-sm">
      <div className="flex justify-between">
        <div className="space-y-1">
          <div>公開: {meta.date}</div>
          <div>更新: {meta.updatedAt}</div>
        </div>
        <div className="space-y-1 text-right">
          <div>いいね: {likes.count} 件</div>
          <div>コメント: {commentCount} 件</div>
        </div>
      </div>

      <div className="py-2">
        <Button
          color="orange"
          fullWidth
          disabled={liked}
          loading={isMutating}
          onClick={() =>
            trigger(
              {},
              {
                onSuccess: () => setLiked(true),
              }
            )
          }
        >
          この記事に
          {liked ? (
            <>
              <HeartIcon size={16} className="mx-1 text-red-400" />
              しました！
            </>
          ) : (
            <>
              <HeartIcon size={16} className="mx-1" />
              する
            </>
          )}
        </Button>
      </div>

      <div className="font-bold">
        カテゴリ:{' '}
        <Badge
          className="lowercase"
          variant="filled"
          color={notionColorToMantineColor(meta.category.color)}
        >
          {meta.category.name}
        </Badge>
      </div>
      <div className="space-x-1 space-y-1 font-bold">
        タグ:{' '}
        {meta.tags.map((tag) => (
          <Badge
            key={tag.id}
            className="lowercase"
            variant="outline"
            color={notionColorToMantineColor(tag.color)}
          >
            {tag.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
