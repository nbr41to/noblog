import { NotionPostMeta } from '@/types/notion';
import { FC } from 'react';

type Props = {
  post: NotionPostMeta;
};

export const PostHeader: FC<Props> = ({ post }) => {
  return (
    <div className=''>
      <h2 className='rounded-full bg-orange-50 py-4 px-8 font-bold'>
        {post.title}
      </h2>
      <div className='py-2 text-right text-sm font-medium'>
        <div>公開: {post.date}</div>
        <div>更新: {post.updatedAt}</div>
      </div>
    </div>
  );
};
