import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

const getLikesById = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  /* Endpointからpage_idを取得 */
  const page_id = req.url.replace('/api/get/likes/', '');
  /* page_idからLikesを取得 */
  const { properties } = await notion.pages.retrieve({
    page_id,
  });
  if (properties.Likes.type !== 'number')
    return res.status(400).json({ error: 'Likes is not a number' });
  res.status(200).json(properties.Likes.number || 0);
};

export default getLikesById;
