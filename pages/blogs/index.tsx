import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useState, VFC } from 'react';
import styled from 'styled-components';

import { SelectOptionButton } from '@/components/Blog/_SelectOptionButton';
import { BlogList } from '@/components/Blog/BlogList';
import { CategoryList } from '@/components/Blog/CategoryList';
import { TagList } from '@/components/Blog/TagList';
import databaseProperties from '@/data/database-properties.json';
import { DatabaseProperties, NotionPageItem } from '@/type/notion';
import { generateDatabaseProperties } from '@/utils/generateDatabaseProperties';

import { getDatabaseInfo, getPageList } from '../../src/apis/notion';

type BlogPageProps = {
  items: NotionPageItem[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseInfo = await getDatabaseInfo();

    /* databaseInfoをjsonで書き出し */
    generateDatabaseProperties(databaseInfo);

    /* データベースからページを取得 */
    const pageList = await getPageList();

    return {
      props: {
        items: pageList,
        databaseInfo, // _app.tsxで使用
      },
    };
  } catch (error) {
    console.error(error);
  }
};

/* Page Component */
const BlogsPage: VFC<BlogPageProps> = ({ items }) => {
  const { categories, tags } = databaseProperties as DatabaseProperties;
  const router = useRouter();
  const { categoryId, tagId } = router.query;

  const [selected, setSelected] = useState({
    categoryId: typeof categoryId === 'string' ? categoryId : '',
    tagIds: typeof tagId === 'string' ? [tagId] : [],
    isEvery: false,
  });

  /* itemsにFilterをかけて返す */
  const filteredItems = () => {
    const { categoryId, tagIds } = selected;
    const filteredItems = items.filter((item) => {
      /* 型ガード */
      if (item.properties.Category.type !== 'select') return;
      if (item.properties.Tags.type !== 'multi_select') return;

      const itemsCategoryId = item.properties.Category.select.id;

      const itemsTagIds = item.properties.Tags.multi_select.map(
        (tag) => tag.id,
      );

      const isCategoryMatch =
        categoryId === '' || categoryId === itemsCategoryId;
      /* every...全て一致, some...いずれかが一致 */
      const isTagMatch =
        tagIds.length === 0 || selected.isEvery
          ? tagIds.every((tagId) => itemsTagIds.includes(tagId))
          : tagIds.some((tagId) => itemsTagIds.includes(tagId));

      return isCategoryMatch && isTagMatch; // c && t , c || t
    });
    return filteredItems;
  };

  /* Categoryの選択と解除（単一選択） */
  const handleCategoryClick = (categoryId: string) => {
    setSelected((prev) => ({
      ...prev,
      categoryId: prev.categoryId === categoryId ? '' : categoryId,
    }));
  };

  /* Tagの選択と解除（複数選択） */
  const handleTagClick = (tagId: string) => {
    setSelected((prev) => ({
      ...prev,
      tagIds: prev.tagIds.includes(tagId)
        ? prev.tagIds.filter((id) => id !== tagId)
        : [...prev.tagIds, tagId],
    }));
  };

  const handleToggleIsEvery = () => {
    setSelected({ ...selected, isEvery: !selected.isEvery });
  };

  return (
    <BlogsPageStyled>
      <CategoryList
        items={categories}
        selectedId={selected.categoryId}
        onClick={handleCategoryClick}
      />
      <TagList
        items={tags}
        selectedIds={selected.tagIds}
        isEvery={selected.isEvery}
        onClick={handleTagClick}
        onToggle={handleToggleIsEvery}
      />
      <div className="clear_button_wrapper">
        <SelectOptionButton
          name="All clear"
          color="default"
          onClick={() =>
            setSelected({ ...selected, categoryId: '', tagIds: [] })
          }
        />
      </div>
      <BlogList items={filteredItems()} />
    </BlogsPageStyled>
  );
};

const BlogsPageStyled = styled.div`
  > .clear_button_wrapper {
    text-align: right;
  }
`;

export default BlogsPage;
