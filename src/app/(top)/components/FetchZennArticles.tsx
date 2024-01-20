import { formatDate } from '~/libs/dayjs';

const getZennLatestArticles = async () => {
  const data = await fetch(
    'https://zenn.dev/api/articles?username=nbr41to&order=latest',
    {
      next: {
        revalidate: 60 * 60 * 24 * 7, // 1週間
      },
    },
  );
  const json = await data.json();

  return json.articles.slice(0, 5) as ZennArticle[];
};

export const FetchZennArticles = async () => {
  const articles = await getZennLatestArticles();

  return (
    <div className="space-y-2">
      {articles.map((article) => (
        <a
          key={article.id}
          href={`https://zenn.dev${article.path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-light flex items-end justify-between rounded px-4 py-3 shadow transition-transform hover:scale-[1.01]"
        >
          <div className="flex gap-2 text-lg">
            <div>{article.emoji}</div>
            <div className="font-bold">{article.title}</div>
          </div>
          <div className="flex gap-2">
            <div>♥{article.liked_count}</div>
            <div>{formatDate(article.published_at)}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

type ZennArticle = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string | null;
  pinned: boolean;
  path: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
  publication: null;
};
