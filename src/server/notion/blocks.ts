import type {
  AppendBlockChildrenParameters,
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
  UpdateBlockParameters,
} from '@notionhq/client/build/src/api-endpoints';

import { notion } from './client';

/**
 * Blockの取得
 * @param block_id BlockのID
 */
export const getBlock = async (block_id: string) =>
  notion.blocks.retrieve({
    block_id,
  });

/**
 * Blockの編集
 * @param block_id BlockのID
 * @param blockObject 編集するBlockObject
 */
export const updateBlock = async (params: UpdateBlockParameters) =>
  notion.blocks.update(params);

/**
 * Blockの中のchildrenを取得
 * @param block_id BlockのID
 * @param page_size 取得するchildrenの上限
 */
export const getChildrenInBlock = async (params: ListBlockChildrenParameters) =>
  notion.blocks.children.list(params);
/**
 * Blockの中のchildrenをすべて取得
 * @param block_id BlockのID
 * @param page_size 取得するchildrenの上限
 */
export const getChildrenAllInBlock = async (block_id: string) => {
  const blocks = [];
  let nextCursor: string | undefined = undefined;

  do {
    const response: ListBlockChildrenResponse = await getChildrenInBlock({
      block_id,
      start_cursor: nextCursor,
    });
    blocks.push(response.results);
    if (response.has_more && response.next_cursor) {
      nextCursor = response.next_cursor;
    } else {
      nextCursor = undefined;
    }
  } while (nextCursor);

  return blocks.flat();
};

/**
 * childrenにBlockを追加
 * @param block_id BlockのID
 * @param children 追加するBlockObjectの配列
 */
export const appendBlocks = async (params: AppendBlockChildrenParameters) =>
  notion.blocks.children.append(params);

/**
 * Blockを削除
 * @param block_id BlockのID
 */
export const deleteBlock = async (block_id: string) =>
  notion.blocks.delete({
    block_id,
  });

/* https://developers.notion.com/reference/block */
