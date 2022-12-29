import type { ZennArticle } from '@/types/zennArticle';

import Parser from 'rss-parser';

const parser = new Parser();

/* 自分のZennの記事一覧（最新20件を取得） */
export const getZennArticles = async () => {
  const response = await parser.parseURL('https://zenn.dev/nbr41to/feed');
  const articles = response.items as ZennArticle[];

  return articles;
};
