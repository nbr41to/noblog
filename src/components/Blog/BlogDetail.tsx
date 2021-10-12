import Head from 'next/head';
import { useMemo, VFC } from 'react';
import styled from 'styled-components';

import { AdsenseRow } from '@/components/Adsense/AdsenseRow';
import { NotionBlockCompiler } from '@/components/Notion/NotionBlockCompiler';
import { NotionPageContent } from '@/type/notion';
import { dateFormatted } from '@/utils/dateFormatted';

import { DetailHeader } from './_DetailHeader';

type BlogDetailProps = {
  className?: string;
  content: NotionPageContent;
};

export const BlogDetail: VFC<BlogDetailProps> = ({ className, content }) => {
  /* contentを抽出してmemo化 */
  const extractedContent = useMemo(() => {
    const { pageInfo } = content;
    const { properties } = pageInfo;
    const { blocks } = content;

    const extractedContent = {
      id: pageInfo.id,
      title: '',
      icon: '🐮',
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

  const { blocks, ...headerInfo } = extractedContent;

  return (
    <>
      <Head>
        <title>{`noblog | ${extractedContent.title}`}</title>
      </Head>
      <StyledBlogDetail className={`${className}`}>
        <DetailHeader {...headerInfo} />
        <div className="detail_body">
          {blocks.map((block) => (
            <NotionBlockCompiler key={block.id} block={block} />
          ))}
          {/* <AdsenseRow /> */}
        </div>
        <div className="detail_footer"></div>
      </StyledBlogDetail>
    </>
  );
};

const StyledBlogDetail = styled.div`
  > .detail_body {
    padding: 28px 8px;
  }
`;
