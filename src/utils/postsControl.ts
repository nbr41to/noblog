import type { ViewControl } from '~/types/form';
import type {
  NotionBlogPropertiesWithCount,
  NotionDatabaseProperty,
  NotionPageObjectResponse,
} from '~/types/notion';

/**
 * NotionのDatabaseのpropertiesをカテゴリーとタグの数を追加したオブジェクトに変換
 */
export const getPropertiesWithCount = (
  properties: NotionDatabaseProperty,
  posts: NotionPageObjectResponse[],
): NotionBlogPropertiesWithCount => {
  if (!('Category' in properties && 'Tags' in properties))
    return {
      categories: [],
      tags: [],
    };

  return {
    categories:
      properties.Category.type === 'select'
        ? properties.Category.select.options.map((option) => ({
            ...option,
            count: posts.filter((post) =>
              post.properties.Category.type === 'select'
                ? post.properties.Category.select?.id === option.id
                : false,
            ).length,
          }))
        : [],
    tags:
      properties.Tags.type === 'multi_select'
        ? properties.Tags.multi_select.options.map((option) => ({
            ...option,
            count: posts.filter((post) =>
              post.properties.Tags.type === 'multi_select'
                ? post.properties.Tags.multi_select.some(
                    (tag) => tag.id === option.id,
                  )
                : false,
            ).length,
          }))
        : [],
  };
};

/**
 * NotionのPageObjectResponseをViewControlに従ってフィルタリング
 */
export const getControlledPosts = (
  posts: NotionPageObjectResponse[],
  viewControlValue: ViewControl,
): NotionPageObjectResponse[] => {
  const filteredPostsArray = posts.filter((post) => {
    if (post.properties.Category.type !== 'select') return false;
    const isCategoryMatched =
      viewControlValue.categoryId === ''
        ? true
        : post.properties.Category.select?.id === viewControlValue.categoryId;
    const isTagMatched =
      viewControlValue.tagIds.length === 0
        ? true
        : viewControlValue.tagIds.every((tagId) => {
            if (post.properties.Tags.type !== 'multi_select') return false;

            return post.properties.Tags.multi_select.some(
              (tag) => tag.id === tagId,
            );
          });

    return isCategoryMatched && isTagMatched;
  });

  return filteredPostsArray;
};
