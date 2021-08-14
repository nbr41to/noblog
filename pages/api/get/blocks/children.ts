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
  console.log(req.body);
  // idを受け取って、そのBlockを取得する

  // const response = await notion.blocks.children.list({
  //   block_id: process.env.NOTION_TREND_BLOCK_ID,
  //   page_size: 10,
  // });

  // res.status(200).json(response.results);
};
