import { NextApiRequest, NextApiResponse } from 'next';

import { getBlock } from '@/apis/notion';

/* Endpointのblock_idから情報を取得 */
const getBlockById = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const block_id = req.url.replace('/api/get/block/', '');
  const result = await getBlock(block_id);
  if (!result) return res.status(400).json({ error: 'Block ID is not found.' });
  res.status(200).json(result);
};

export default getBlockById;
