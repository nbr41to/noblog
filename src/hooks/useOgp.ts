import useSWR from 'swr';

/* 書くページに関するlikesをpage_idをkeyに保存する */

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

export const useOgp = (url: string): any => {
  const key = `/api/get/ogp/${url
    .replace('https://', '')
    .replace('http://', '')}`;
  const { data, error } = useSWR(key, fetcher);
  if (error) console.error(error);
  return { data };
};
