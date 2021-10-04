import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

/**
 *  databaseからpage一覧を取得
 *  @param {string} next_cursor optional
 *  @returns Promise<{result: Array<any>, has_more: boolean, next_cursor: string | null }>
 */
export const getPageList = async (
  start_cursor?: string | null,
): Promise<any> => {
  if (start_cursor === null) {
    /* has_moreがnullで返ってくるが, start_cursorはundefinedしか受け付けないので, 変換してる */
    start_cursor = undefined;
  }
  const response = await notion.databases.query({
    database_id,
    start_cursor,
    page_size: 10, // 取得数
    filter: {
      property: 'Publish',
      checkbox: {
        equals: true,
      },
    },
  });
  return response;
};

/* pageListの続き取得 */
export const getPageListNext = async (start_cursor: string): Promise<any> => {
  const response = await notion.databases.query({
    database_id,
    start_cursor,
    page_size: 10,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  });

  return response;
};

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
  console.log(response);
  return response.properties;
};

/* ORIGINAL_BLOCKの内容を取得 */
export const getTrendBlock = async (): Promise<any> => {
  /* my trend */
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_TREND_BLOCK_ID,
  });
  return response;
};

/* Preview用のNotionページを取得 */
