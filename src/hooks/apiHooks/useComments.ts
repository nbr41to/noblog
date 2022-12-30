import type { NotionListCommentsResponse } from '~/types/notion';

import useSWR from 'swr';

import { getFetcher } from './fetcher';

export const useComments = (page_id: string) => {
  const { data, isLoading, error } = useSWR<NotionListCommentsResponse>(
    page_id ? `/api/notion-blog/comments?page_id=${page_id}` : null,
    getFetcher
  );

  return { data: data?.results || [], isLoading, error };
};
