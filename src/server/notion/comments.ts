import type { NotionCreateCommentParameters } from '~/types/notion';

import { notion } from './client';

/**
 * BlockのCommentsを取得
 * @param block_id BlockのID
 * リアクションの絵文字は取得できない
 */
export const getComments = async (block_id: string) => {
  const response = await notion.comments.list({ block_id });

  return response;
};

/**
 * BlockにCommentsを追加
 * @param params NotionCreateCommentParameters
 */
export const createComment = async (params: NotionCreateCommentParameters) =>
  await notion.comments.create(params);
