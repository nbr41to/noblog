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
  const { page_id } = JSON.parse(req.body);
  const response = await notion.pages.retrieve({
    page_id,
  });
  res.status(200).json(response.properties?.likes || 0);
};
