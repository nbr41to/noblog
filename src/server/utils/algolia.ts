import type { AlgoliaSearchObjectRequest } from '~/types/algolia';
import type { NotionPost } from '~/types/notion';

import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  `${process.env.ALGOLIA_APPLICATION_ID}`,
  `${process.env.ALGOLIA_ADMIN_API_KEY}`,
);
const index = client.initIndex('noblog');

export const saveToAlgolia = async (post: NotionPost) => {
  try {
    const body = post.children
      .map((child) => {
        // @ts-expect-error ignore
        const content = child[child.type];
        if (!('rich_text' in content && content.rich_text.length > 0)) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return content.rich_text.map((text: any) => text.plain_text).join('');
      })
      .join('');

    const records: AlgoliaSearchObjectRequest = {
      objectID: post.id,
      title: post.title,
      category: post.category.name,
      tags: post.tags.map((tag) => tag.name),
      body,
    };

    await index.saveObjects([records]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
