export type AlgoliaSearchObjectRequest = {
  objectID: string;
  title: string;
  category: string;
  tags: string[];
  body: string;
};

export type AlgoliaSearchObjectResponse = Omit<
  AlgoliaSearchObjectRequest,
  'body'
>;
