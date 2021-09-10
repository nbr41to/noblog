/* eslint-disable import/no-anonymous-default-export */
import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  const { page_id, current_likes } = JSON.parse(req.body);
  await notion.pages.update({
    page_id,
    properties: {
      likes: {
        number: (current_likes + 1) as number,
        type: 'number',
        id: '{chb',
      },
    },
    archived: false,
  });

  res.status(200).end();
};
