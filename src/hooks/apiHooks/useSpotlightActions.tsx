import type { SpotlightAction } from '@mantine/spotlight';
import type { AlgoliaSearchObjectResponse } from '~/types/algolia';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { searchAlgolia } from '~/utils/algolia';

/**
 * Algoliaの検索結果を取得し、Spotlightのactionsに変換して返す
 */
export const useSpotlightActions = (query: string) => {
  const router = useRouter();
  const [actions, setActions] = useState<SpotlightAction[]>([]);

  useEffect(() => {
    if (!query) return setActions([]);

    const getResult = setTimeout(() => {
      (async () => {
        const response = await searchAlgolia(query);
        const actions = (response.hits as AlgoliaSearchObjectResponse[]).map(
          (hit) => ({
            title: hit.title,
            description: hit.category + ', ' + hit.tags.join(', '),

            onTrigger: () =>
              router.push({
                pathname: '/posts/[page_id]',
                query: { page_id: hit.objectID },
              }),
          })
        );

        setActions(actions);
      })();
    }, 1000);

    return () => clearTimeout(getResult);
  }, [query, router]);

  return actions;
};
