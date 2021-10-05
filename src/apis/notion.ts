import { Client } from '@notionhq/client';
import {
  GetPageResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints';

import {
  NotionPageContent,
  NotionPageItem,
  NotionSelectOption,
} from '@/type/notion';

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
): Promise<NotionPageItem[]> => {
  /* has_moreがnullで返ってくるが, start_cursorはundefinedしか受け付けないので, 変換してる */
  if (start_cursor === null) {
    start_cursor = undefined;
  }
  try {
    const pageList: NotionPageItem[] = [];
    const condition = { has_more: true, next_cursor: null };
    const page_size = 100; // 個ずつ取得

    while (condition.has_more) {
      const response = await notion.databases.query({
        database_id,
        start_cursor,
        page_size,
        filter: {
          property: 'Publish',
          checkbox: {
            equals: true,
          },
        },
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

/* pageの情報を取得 */
export const getPageContent = async (
  page_id: string,
): Promise<NotionPageContent> => {
  try {
    /* pageのpropertiesの取得 */
    const pageInfo = await notion.pages.retrieve({
      page_id,
    });
    /* page内blocksなどの取得 */
    const response = await notion.blocks.children.list({
      block_id: page_id,
    });

    return { pageInfo, blocks: response.results };
  } catch (error) {
    throw Error(error);
  }
};

/* database properties のCategoryとTagsを取得 */
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

/* ORIGINAL_BLOCKの内容を取得 */
export const getTrendBlock = async (): Promise<any> => {
  /* my trend */
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_TREND_BLOCK_ID,
  });
  return response;
};

/* Preview用のNotionページを取得 */
