import type { NextApiRequest, NextApiResponse } from 'next';
import type { Ogp } from '~/types/ogp';

import { getOgp } from '~/server/utils/ogp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ogp>,
) {
  const { url } = req.query as { url: string };

  const ogp = await getOgp(url);

  res.status(200).json(ogp);
}
