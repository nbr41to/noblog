import { GetStaticPaths, GetStaticProps } from 'next';
import { useMemo, VFC } from 'react';
import { getPageContent } from 'src/apis/notion';
import { getPageList } from 'src/apis/notion';
import { dateFormatted } from 'src/utils/dateFormatted';
import styled from 'styled-components';

import { BlogDetail } from '@/components/Blog/BlogDetail';
import { NotionPageContent } from '@/type/notion';

type BlogDetailPageProps = {
  content: NotionPageContent;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageId } = params;
  const content = await getPageContent(
    typeof pageId === 'string' ? pageId : pageId[0],
  );
  return {
    props: { content },
  };
};

type Params = {
  pageId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const pageList = await getPageList();
  const paths = pageList.map(({ id }) => ({ params: { pageId: id } }));
  return {
    paths,
    fallback: false, // 事前に予測されたpathでなければ404を返す
    /* https://maku.blog/p/rdq3ep2/ */
  };
};

const BlogDetailPage: VFC<BlogDetailPageProps> = ({ content }) => {
  /* contentを抽出してmemo化 */
  const extractedContent = useMemo(() => {
    const { pageInfo } = content;
    const { properties } = pageInfo;
    const { blocks } = content;

    const extractedContent = {
      id: pageInfo.id,
      title: '',
      icon: '👏',
      cover_url: '',
      created_time: dateFormatted({ date: pageInfo.created_time }),
      last_edited_time: dateFormatted({ date: pageInfo.last_edited_time }),
      category: null,
      tags: [],
      blocks,
    };
    /* いでよ！型ガードたちよ */
    if (pageInfo.icon && pageInfo.icon.type === 'emoji') {
      extractedContent.icon = pageInfo.icon.emoji;
    }
    if (pageInfo.cover && pageInfo.cover.type === 'external') {
      extractedContent.cover_url = pageInfo.cover.external.url;
    }
    if (properties.Title.type === 'title') {
      extractedContent.title = properties.Title.title[0].plain_text;
    }
    if (properties.Category.type === 'select') {
      extractedContent.category = properties.Category.select;
    }
    if (properties.Tags.type === 'multi_select') {
      extractedContent.tags = properties.Tags.multi_select;
    }

    return extractedContent;
  }, []);

  return (
    <BlogDetailPageStyled>
      <BlogDetail detail={extractedContent} />
    </BlogDetailPageStyled>
  );
};

const BlogDetailPageStyled = styled.div``;

export default BlogDetailPage;
