import ogp from 'ogp-parser';
/* OGPを取得する（Node.jsで使用を想定） */
export const getOGP = async (url: string): Promise<any> => await ogp(url);
