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
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_TREND_BLOCK_ID,
    page_size: 100,
  });

  res.status(200).json(response.results);
};
