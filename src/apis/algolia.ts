import algoliasearch from 'algoliasearch';

// こちらのKeyはAdmin API Key
const client = algoliasearch(
  `${process.env.ALGOLIA_APP_ID}`,
  `${process.env.ALGOLIA_ADMIN_APIKEY}`,
);
const index = client.initIndex('noblog-test');

export const createIndex = (indexData) => {
  index
    .saveObjects(indexData, { autoGenerateObjectIDIfNotExist: true })
    .catch((err) => {
      console.error(err);
    });
};
