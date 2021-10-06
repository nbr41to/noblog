export const fetcher = (url: string): Promise<number> =>
  fetch(url).then((res) => res.json());
