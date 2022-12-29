import type { ZennArticle } from '@/types/zennArticle';
import type { FC } from 'react';

import Image from 'next/image';

type Props = {
  articles: ZennArticle[];
};

export const ZennListTemplate: FC<Props> = ({ articles }) => {
  return (
    <div>
      <h2 className='text-center font-bold'>
        - Zennに公開されている記事一覧 -
      </h2>
      <p>最新20件</p>

      <div className='flex flex-wrap justify-center gap-4 rounded bg-white p-6'>
        {articles?.map((article) => {
          return (
            <div key={article.link} className='rounded-md shadow'>
              <h3 className='hidden'>{article.title}</h3>
              <a
                className='relative block h-[168px] w-80 transition-transform duration-300 hover:scale-105'
                href={article.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-md'
                  src={article.enclosure?.url}
                  alt={article.title}
                  fill
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
