import { NextApiRequest, NextApiResponse } from 'next';

import { getOGP } from '@/utils/getOgp';

const getOgpByUrl = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  /* Endpointからpage_idを取得 */
  const url = req.url.replace('/api/get/ogp/', '');
  const decoded = decodeURIComponent(url);
  const data = await getOGP(decoded);
  res.status(200).json(data || {});
};

export default getOgpByUrl;
