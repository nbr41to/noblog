import algoliasearch from 'algoliasearch/lite';

export const client = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APIKEY}`
);
