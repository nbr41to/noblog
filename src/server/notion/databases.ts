import { notion } from './client';

/**
 * Databaseの情報のみを取得
 * @param database_id DatabaseのID
 */
export const getDatabase = (database_id: string) =>
  notion.databases.retrieve({ database_id });

/**
 * Databaseの中身を取得
 * @param database_id DatabaseのID
 * @param options DatabaseのQueryオプション
 */
export const getDatabaseContents = async (
  database_id: string,
  page_size = 10,
  options?: any,
) => {
  const response = await notion.databases.query({
    database_id,
    page_size,
    ...options,
  });

  return response;
};

/* DBの作成と編集はSDKには存在しない（APIはある） */
/* https://developers.notion.com/reference/database */
