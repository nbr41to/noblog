import type { NextApiRequest, NextApiResponse } from "next";
import type { NotionListCommentsResponse } from "~/types/notion";

import { getComments } from "~/server/notion/comments";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NotionListCommentsResponse>
) {
  const { page_id } = req.query as { page_id: string };
  const { method } = req;

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const response = await getComments(page_id);
  res.status(200).json(response);
}
