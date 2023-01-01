import { useCallback } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { getFetcher, patchFetcher } from './fetcher';

const url = '/api/notion-blog/likes';
const initialData = { count: 0 };

export const useLikes = (page_id: string) => {
  const { data, isLoading, error, mutate } = useSWR<{ count: number }>(
    page_id ? `${url}/${page_id}` : null,
    getFetcher
  );
  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(page_id ? `${url}/${page_id}` : null, patchFetcher, {
    onSuccess: revalidate,
  });

  return {
    data: data || initialData,
    revalidate,
    isLoading,
    error,

    trigger,
    isMutating,
    mutateError,
  };
};
