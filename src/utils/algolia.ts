import type { AlgoliaSearchObjectResponse } from '~/types/algolia';

import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY}`
);

const index = client.initIndex('noblog');

export const searchAlgolia = async (query: string) => {
  const res = await index.search(query, {
    attributesToRetrieve: ['title', 'category', 'tags'],
    // hitsPerPage: 20,
  });

  return res.hits as AlgoliaSearchObjectResponse[];
};
