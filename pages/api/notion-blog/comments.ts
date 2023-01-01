import type { CreateCommentResponse } from '@notionhq/client/build/src/api-endpoints';
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  NotionCreateCommentParameters,
  NotionListCommentsResponse,
} from '~/types/notion';

import { createComment, getComments } from '~/server/notion/comments';

/**
 * Commentの取得と作成
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotionListCommentsResponse | CreateCommentResponse>
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const page_id = req.query.page_id as string;
      const getRes = await getComments(page_id);
      res.status(200).json(getRes);
      break;
    case 'POST':
      const params = req.body as NotionCreateCommentParameters;
      const postRes = await createComment(params);
      res.status(200).json(postRes);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
