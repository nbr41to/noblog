/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  const result = await fetch(
    `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_PERSONAL_ACCESS_TOKEN}`,
  );
  const sleeps = await result.json().then((data) => data);
  res.status(200).json(sleeps);
};
