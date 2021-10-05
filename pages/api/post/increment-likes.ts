import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

const incrementLikes = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  /* 必要情報を受取る */
  const { page_id, current_likes } = JSON.parse(req.body);
  /* Likes propertyの更新 */
  await notion.pages.update({
    page_id,
    properties: {
      Likes: {
        number: current_likes + 1,
      },
    },
    archived: false,
  });

  res.status(200).end(); // しっかりと終了しよう
  /* https://zenn.dev/terrierscript/articles/2021-02-27-next-js-api-resolved-without-middleware */
};

export default incrementLikes;
