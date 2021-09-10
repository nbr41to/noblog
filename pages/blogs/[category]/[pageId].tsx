import { GetStaticPaths, GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';
import { NotionBlock } from 'src/notion/NotionBlock';
import { getPageContent } from 'src/notion/functions';
import { getPageList } from 'src/notion/functions';
import { dateFormated } from 'src/utils/dateFormated';
import { AdsenseRow } from 'src/components/Adsense/AdsenseRow';
import Image from 'next/image';

type BlogDetailPageProps = {
  content: any;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageId } = params;
  const content = await getPageContent(pageId);
  return {
    props: { content },
  };
};

type Params = {
  category: string;
  pageId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { results } = await getPageList();
  const paths = results.map(({ id, properties }) => ({
    params: {
      category: properties.Category.select.name,
      pageId: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const BlogDetailPage: VFC<BlogDetailPageProps> = ({ content }) => {
  const { results: blocks } = content;
  const { properties } = content;

  const subCategory = properties.SubCategory.multi_select;
  const tags = properties.Tags.multi_select;

  // console.log(content);
  return (
    <BlogDetailPageStyled>
      {content.icon && <div className="blog_icon">{content.icon.emoji}</div>}
      <h1>{properties.Page.title[0].plain_text}</h1>
      {content.cover && (
        <div className="blog_cover">
          <Image
            src={content.cover.external.url}
            layout="fill"
            objectFit="contain"
            alt="blog cover"
          />
        </div>
      )}
      <div className="blog_info_header">
        <p>
          カテゴリー：
          {properties.Category.select.name}
        </p>
        <p>
          作成日：
          {dateFormated({ date: properties.Created.created_time })}
        </p>
        <p>
          最終編集日：
          {dateFormated({ date: properties.Edited.last_edited_time })}
        </p>
      </div>
      <div className="blog_info_body">
        {blocks.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
        <AdsenseRow />
      </div>
      <div className="blog_info_footer">
        <div>
          サブカテゴリ：
          {subCategory.length
            ? subCategory.map((i) => <span key={i.id}>{i.name}</span>)
            : 'なし'}
        </div>
        <div className="item_footer">
          タグ：
          {tags.length ? (
            tags.map((i) => <span key={i.id}>{i.name}</span>)
          ) : (
            <span>なし</span>
          )}
        </div>
      </div>
    </BlogDetailPageStyled>
  );
};

const BlogDetailPageStyled = styled.div`
  > .blog_icon {
    font-size: 100px;
    text-align: center;
  }
  > .blog_cover {
    height: 280px;
    margin: 0 auto 16px;
    position: relative;
    img {
      display: block;
    }
  }
  > h1 {
    text-align: center;
    margin: 4px 0 16px;
  }
  > .blog_info_header {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 2px dotted #444;
  }
  > .blog_info_body {
    padding: 28px 8px;
  }
  > .blog_info_footer {
    margin-top: 80px;
    padding-top: 8px;
    border-top: 2px dotted #444;
  }
`;

export default BlogDetailPage;
