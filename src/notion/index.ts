import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

/* 最初のpageListを取得 */
export const getPageList = async (): Promise<any> => {
  const response = await notion.databases.query({
    database_id,
    page_size: 20,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  });

  return response;
};

/* pageListの続き取得 */
export const getPageListNext = async (start_cursor: string): Promise<any> => {};

/* pageの情報を取得 */
export const getPageContent = async (
  page_id: string | string[],
): Promise<any> => {
  if (Array.isArray(page_id)) {
    page_id = page_id[0];
  }
  const page_propeties = await notion.pages.retrieve({
    page_id,
  });
  const page_blocks = await notion.blocks.children.list({
    block_id: page_id,
  });

  return { ...page_propeties, ...page_blocks };
};

/* databaseのpropertiesを取得 */
export const getDatabaseInfo = async (): Promise<any> => {
  const response = await notion.databases.retrieve({ database_id });
  return response.properties;
};

/* ORIGINAL_BLOCKの内容を取得 */
export const getTrendBlock = async () => {
  /* my trend */
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_TREND_BLOCK_ID,
  });
  return response;
};
