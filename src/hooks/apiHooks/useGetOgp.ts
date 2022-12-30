import type { Ogp } from '@/types/ogp';

import useSWR from 'swr';

import { getFetcher } from './fetcher';

export const useGetOgp = (url: string) =>
  useSWR<Ogp, Error>(url ? `/api/ogp?url=${url}` : null, getFetcher);
