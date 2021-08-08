/* eslint-disable import/no-anonymous-default-export */
import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  /* データベース情報とプロパティ種類や名前のみ */
  const response1 = await notion.databases.retrieve({
    database_id: 'xxx', //db_id
  });
  /* データベース全部とプロパティの中身のみ */
  const response2 = await notion.databases.query({
    database_id: 'xxx', //db_id
    page_size: 30,
  });
  /* ページ情報とプロパティのみ */
  const response3 = await notion.pages.retrieve({
    page_id: 'xxx', //page_id
  });
  /* ブロックの中身を取得 */
  const response4 = await notion.blocks.retrieve({
    block_id: 'xxx', //block_id
  });
  /* ブロックの中にあるブロックを取得 */
  const response5 = await notion.blocks.children.list({
    block_id: 'xxx', //block_id
    page_size: 30,
  });
  /* page_idを使えばページ内のブロック一覧を取得できる(propはない) */
  const response6 = await notion.blocks.children.list({
    block_id: 'xxx', // page_id
  });

  res.status(200).json({
    response1,
    response2,
    response3,
    response4,
    response5,
    response6,
  });
  // res.status(200).json({ name: 'John Doe' });
};
