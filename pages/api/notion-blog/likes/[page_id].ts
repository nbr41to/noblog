import type {
  PageObjectResponse,
  UpdatePageResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getPage, updatePage } from '~/server/notion/pages';

/**
 * いいね数の取得とIncrement
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number } | UpdatePageResponse>,
) {
  const { method } = req;
  const page_id = req.query.page_id as string;

  const getRes = await getPage(page_id);
  const likeProperty = (getRes as PageObjectResponse).properties.Likes;
  const currentCount =
    (likeProperty.type === 'number' && likeProperty.number) || 0;

  switch (method) {
    case 'GET':
      res.status(200).json({ count: currentCount });
      break;
    case 'PATCH':
      const postRes = await updatePage({
        page_id,
        properties: {
          Likes: {
            number: currentCount + 1,
          },
        },
      });
      res.status(200).json(postRes);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PATCH']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
