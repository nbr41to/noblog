import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { NotionPostMeta, NotionBlockObjectResponse } from '~/types/notion';

/**
 * NotionのPageObjectResponseをPostMetaに変換
 */
export const toPostMeta = (page: PageObjectResponse): NotionPostMeta => {
  const { id, icon, properties, last_edited_time } = page;

  if (icon !== null && icon.type !== 'emoji')
    throw new Error('Icon is not emoji');
  if (properties.Title.type !== 'title') throw new Error('Title is not title');
  if (properties.Category.type !== 'select')
    throw new Error('Category is not select');
  if (properties.Date.type !== 'date') throw new Error('Date is not date');
  if (properties.Tags.type !== 'multi_select')
    throw new Error('Tags is not multi_select');
  if (properties.Likes.type !== 'number')
    throw new Error('Likes is not number');

  const title = properties.Title.title[0].plain_text;
  const category = properties.Category.select?.name || 'カテゴリなし';
  const date = properties.Date.date?.start || '日付なし';
  const updatedAt = last_edited_time.substring(0, 10);
  const tags = properties.Tags.multi_select;
  const likes = properties.Likes.number || 0;

  return {
    id,
    icon: icon?.emoji || '📄',
    title,
    category,
    date,
    updatedAt,
    tags,
    likes,
  };
};

/**
 * NotionのPageのchildrenをMeta description用のテキストに変換
 */

export const toMetaDescription = (
  children: NotionBlockObjectResponse[]
): string => {
  let allText = '';
  let i = 0;
  do {
    const child = children[i];
    const type = child.type;
    if (type === 'code' || type === 'unsupported') {
      i++;
      continue;
    }
    // @ts-expect-error ignore
    const rich_text = child[type]?.rich_text;
    if (rich_text && rich_text.length > 0) {
      const plainText = rich_text
        .map((text: { plain_text: string }) => text.plain_text)
        .join('');

      allText = allText + plainText;
    }
    i++;
  } while (i < children.length && allText.length < 70);

  return `${allText}...`;
};
