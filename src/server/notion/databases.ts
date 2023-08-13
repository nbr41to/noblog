import type {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { notion } from './client';

/**
 * Databaseの情報のみを取得
 * @param database_id DatabaseのID
 */
export const getDatabase = (database_id: string) =>
  notion.databases.retrieve({ database_id });

/**
 * Databaseの中身を取得
 * @param params QueryDatabaseParameters
 */
export const getDatabaseContents = (params: QueryDatabaseParameters) =>
  notion.databases.query(params);

/**
 * Databaseの中身をすべて取得
 * @param params QueryDatabaseParameters
 */
export const getDatabaseContentsAll = async (
  params: QueryDatabaseParameters,
) => {
  const postArray = [];
  let nextCursor: string | undefined = undefined;

  do {
    const response: QueryDatabaseResponse = await getDatabaseContents({
      ...params,
      start_cursor: nextCursor,
    });
    postArray.push(response.results);
    if (response.has_more && response.next_cursor) {
      nextCursor = response.next_cursor;
    } else {
      nextCursor = undefined;
    }
  } while (nextCursor);

  return postArray;
};

/* DBの作成と編集はSDKには存在しない（APIはある） */
/* https://developers.notion.com/reference/database */
