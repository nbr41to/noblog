import { notion } from './client';

/**
 * Pageの取得
 * @param page_id PageまたはBlockのID
 */
export const getPage = async (page_id: string) =>
  await notion.pages.retrieve({ page_id });

/**
 * Pageの作成
 * @param params PageObject（Parent Database IDが必要）
 */
export const createPage = async (params: any) =>
  await notion.pages.create({
    ...params,
  });

/**
 * Pageの編集
 * @param page_id PageまたはBlockのID
 * @param properties 編集するPageのPropertyObject
 */
export const updatePage = async (page_id: string, properties: any) =>
  notion.pages.update({
    page_id,
    properties,
  });

/* 削除はBlockのAPIを使用する */

/* https://developers.notion.com/reference/page */
