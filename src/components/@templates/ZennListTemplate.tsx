import type { FC } from "react";
import type { ZennArticle } from "~/types/zennArticle";

import Image from "next/image";

import { PageTitle } from "~/commons/PageTitle";

type Props = {
  articles: ZennArticle[];
};

export const ZennListTemplate: FC<Props> = ({ articles }) => {
  return (
    <div>
      <PageTitle title="My Zenn articles" />

      <p>最新20件</p>

      <div className="flex flex-wrap justify-center gap-4 rounded bg-white p-6">
        {articles?.map((article) => {
          return (
            <div key={article.link} className="rounded-md shadow">
              <h3 className="hidden">{article.title}</h3>
              <a
                className="relative block h-[168px] w-80 transition-transform duration-300 hover:scale-105"
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-md"
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
