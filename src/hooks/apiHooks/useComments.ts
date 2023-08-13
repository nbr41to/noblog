import type {
  NotionCommentObjectResponse,
  NotionCreateCommentParameters,
  NotionListCommentsResponse,
} from '~/types/notion';

import { useCallback } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { getFetcher, postFetcher } from './fetcher';

const url = '/api/notion-blog/comments';

export const useComments = (page_id: string) => {
  const { data, isLoading, error, mutate } = useSWR<NotionListCommentsResponse>(
    `${url}?page_id=${page_id}`,
    page_id && page_id !== '[page_id]' ? getFetcher : null,
  );
  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation<
    NotionCommentObjectResponse,
    Error,
    typeof url,
    NotionCreateCommentParameters
  >(url, postFetcher, {
    onSuccess: revalidate,
  });

  return {
    data: data?.results || [],
    revalidate,
    isLoading,
    error,

    trigger,
    isMutating,
    mutateError,
  };
};
