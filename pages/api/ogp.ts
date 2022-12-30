import type { Ogp } from '@/types/ogp';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getOgp } from '@/server/utils/getOgp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ogp>,
) {
  const { url } = req.query as { url: string };

  const ogp = await getOgp(url);

  res.status(200).json(ogp);
}
