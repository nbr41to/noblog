import { Client } from '@notionhq/client';

import {
  NotionBlock,
  NotionPageContent,
  NotionPageItem,
  NotionSelectOption,
} from '@/type/notion';

const notion = new Client({
  auth: process.env.INTERNAL_INTEGRATION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

/**
 *  noblogのDATABASEからPAGE一覧を全て取得
 *  @returns Promise<{result: Array<any>, has_more: boolean, next_cursor: string | null }>
 */
export const getMainBlogList = async (): Promise<NotionPageItem[]> => {
  const pageList: NotionPageItem[] = [];
  const condition = { has_more: true, next_cursor: undefined };
  const page_size = 100; // 個ずつ取得

  /* next_cursorを使ってBlogの記事を全て取得する */
  try {
    while (condition.has_more) {
      const response = await notion.databases.query({
        database_id,
        start_cursor: condition.next_cursor,
        page_size,
        filter: {
          property: 'Status',
          select: {
            equals: 'PUBLISH',
          },
        },
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      });
      condition.has_more = response.has_more;
      condition.next_cursor = response.next_cursor;
      pageList.push(...response.results);
    }

    return pageList;
  } catch (error) {
    throw Error(error);
  }
};

/* childrenを取得 */
export const getChildrenBlocks = async (
  id: string, // page_id || block_id
): Promise<NotionBlock[]> => {
  try {
    const response = await notion.blocks.children.list({
      block_id: id,
    });
    return response.results;
  } catch (error) {
    throw Error(error);
  }
};

/* PAGEの情報とpropertiesを取得 */
export const getPageContent = async (
  page_id: string,
): Promise<NotionPageContent> => {
  try {
    /* PAGE の properties を 取得 */
    const pageInfo = await notion.pages.retrieve({
      page_id,
    });
    /* PAGEの BLOCKS など を 取得 */
    const response = await notion.blocks.children.list({
      block_id: page_id,
    });

    return { pageInfo, blocks: response.results };
  } catch (error) {
    throw Error(error);
  }
};

/* DATABASE の properties の Category と Tags を取得 */
export const getDatabaseInfo = async (): Promise<{
  categories: NotionSelectOption[];
  tags: NotionSelectOption[];
}> => {
  try {
    const response = await notion.databases.retrieve({ database_id });
    /* Categoryを取得 */
    let categories: NotionSelectOption[];
    if (response.properties.Category.type === 'select') {
      categories = response.properties.Category.select.options.map(
        (category) => {
          const { id, color, name } = category;
          return { id, color, name };
        },
      );
    }
    /* Tagsを取得 */
    let tags: NotionSelectOption[];
    if (response.properties.Tags.type === 'multi_select') {
      tags = response.properties.Tags.multi_select.options.map((tag) => {
        const { id, color, name } = tag;
        return { id, color, name };
      });
    }
    return { categories, tags };
  } catch (error) {
    throw Error(error);
  }
};

/* BLOCKの情報を取得 */
// 現在はimage blockのurlを取得するのに使用
export const getBlock = async (block_id: string): Promise<NotionBlock> => {
  try {
    const response = await notion.blocks.retrieve({
      block_id,
    });
    return response;
  } catch (error) {
    throw Error(error);
  }
};

/**
 * 特別なBLOCKやPAGEを取得する場合
 */
export const getTrendBlock = async (): Promise<any> => {
  /* my trend */
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_TREND_BLOCK_ID,
  });
  return response;
};
