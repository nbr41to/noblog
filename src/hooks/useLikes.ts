import useSWR, { KeyedMutator } from 'swr';

/* 書くページに関するlikesをpage_idをkeyに保存する */

const fetcher = (url: string): Promise<number> =>
  fetch(url).then((res) => res.json());

export const useLikes = (
  page_id: string,
): { likes: number; setLikes: KeyedMutator<number> } => {
  const { data, error, mutate } = useSWR(`/api/get/likes/${page_id}`, fetcher);
  if (error) console.error(error);
  return { likes: data, setLikes: mutate };
};
