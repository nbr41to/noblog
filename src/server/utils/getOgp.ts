import type { Ogp } from '~/types/ogp';

import ogpParser from 'ogp-parser';

/* OGPを取得する（Node.jsで使用を想定） */

export const getOgp = async (url: string): Promise<Ogp> => {
  const encodeURL = encodeURI(url);
  const { title, ogp } = await ogpParser(encodeURL);

  return {
    url: encodeURL,
    title: title,
    description:
      ogp['og:description']?.length > 0 ? ogp['og:description'][0] : '',
    imageUrl: ogp['og:image']?.length > 0 ? ogp['og:image'][0] : '',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=' + encodeURL,
  };
};
