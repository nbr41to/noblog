import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { NotionBlockObjectResponse } from '~/types/notion';
import type { Ogp } from '~/types/ogp';

import ogpParser from 'ogp-parser';

/* OGPを取得する（Node.jsで使用を想定） */

export const getOgp = async (url: string): Promise<Ogp> => {
  try {
    const encodeURL = encodeURI(url);
    const { title, ogp } = await ogpParser(encodeURL);

    return {
      url: encodeURL,
      title: title,
      description:
        ogp['og:description']?.length > 0 ? ogp['og:description'][0] : '',
      imageUrl: ogp['og:image']?.length > 0 ? ogp['og:image'][0] : '',
      faviconUrl: `https://www.google.com/s2/favicons?domain=${encodeURL}`,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('OPGの取得に失敗しました');

    return {
      url: url,
      title: '',
      description: '',
      imageUrl: '',
      faviconUrl: '',
    };
  }
};

/* NotionBlockObjectのBookmarkにOPG情報を差し込む */
export const setOgp = async (
  children: NotionBlockObjectResponse[]
): Promise<NotionBlockObjectResponse[]> => {
  const results = await Promise.all(
    children.map(async (child) => {
      if (child.type !== 'bookmark') return child;

      const url = child.bookmark.url;
      const ogp = await getOgp(url);

      return {
        ...child,
        ogp,
      } as BookmarkBlockObjectResponse & { ogp: Ogp };
    })
  );

  return results;
};
