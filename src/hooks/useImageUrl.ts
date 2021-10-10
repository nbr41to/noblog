import useSWR from 'swr';

import { NotionBlock } from '@/type/notion';

/* 書くページに関するlikesをpage_idをkeyに保存する */

const fetcher = async (url: string): Promise<{ url: string }> => {
  const res = await fetch(url.replace('image/', ''));
  const data = (await res.json()) as Extract<NotionBlock, { type: 'image' }>;
  return {
    url: data.image.type === 'file' ? data.image.file.url : '/',
  };
};

export const useImageUrl = (input: {
  blockId: string | null;
  initialState: { url: string };
}): { url: string } => {
  const { blockId, initialState } = input;
  const { data, error } = useSWR(
    () => (blockId ? `/api/get/block/image/${blockId}` : null),
    fetcher,
    { fallbackData: initialState },
  );

  if (error) console.error(error);

  return data;
};
