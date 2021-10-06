import { NextApiRequest, NextApiResponse } from 'next';

import { getOGP } from '@/utils/getOgp';

const getOgpByUrl = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  /* Endpointからpage_idを取得 */
  const url = req.url.replace('/api/get/ogp/', 'https://');
  const data = await getOGP(url);
  res.status(200).json(data || {});
};

export default getOgpByUrl;
