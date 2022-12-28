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
export const updateBlock = async (block_id: string, blockObject: any) =>
  notion.blocks.update({
    block_id,
    ...blockObject,
  });

/**
 * Blockの中のchildrenを取得
 * @param block_id BlockのID
 * @param page_size 取得するchildrenの上限
 */
export const getChildrenInBlock = async (block_id: string, page_size = 100) =>
  notion.blocks.children.list({
    block_id,
    page_size,
  });

/**
 * childrenにBlockを追加
 * @param block_id BlockのID
 * @param children 追加するBlockObjectの配列
 */
export const appendBlocks = async (block_id: string, children: any[]) =>
  notion.blocks.children.append({
    block_id,
    children,
  });

/**
 * Blockを削除
 * @param block_id BlockのID
 */
export const deleteBlock = async (block_id: string) =>
  notion.blocks.delete({
    block_id,
  });

/* https://developers.notion.com/reference/block */
