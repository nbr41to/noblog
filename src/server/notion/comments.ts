import { notion } from './client';

/**
 * BlockのCommentsを取得
 * @param blockId BlockのID
 * リアクションの絵文字は取得できない
 */
export const getComments = async (blockId: string) => {
  const response = await notion.comments.list({ block_id: blockId });

  return response;
};

/**
 * BlockにCommentsを追加
 * @param pageId PageまたはBlockのID
 * @param comment コメント
 */
export const createComment = async (page_id: string, comment: string) => {
  const response = await notion.comments.create({
    parent: {
      page_id, // 親のpageまたはblockのid
    },
    // discussion_id: 'discussionId', // discussion_idを使用する場合こっち
    rich_text: [
      {
        text: {
          content: comment,
        },
      },
    ],
  });

  return response;
};