import { VFC } from 'react';
import styled from 'styled-components';

import { AdsenseRow } from '@/components/Adsense/AdsenseRow';
import { NotionBlockCompiler } from '@/components/Notion/NotionBlockCompiler';
import { NotionBlock, NotionColor } from '@/type/notion';

import { DetailHeader } from './_DetailHeader';

type BlogDetailProps = {
  className?: string;
  detail: {
    id: string;
    title: string;
    icon: string;
    cover_url: string;
    created_time: string;
    last_edited_time: string;
    category: {
      id: string;
      color: NotionColor;
      name: string;
    };
    tags: {
      id: string;
      color: NotionColor;
      name: string;
    }[];
    blocks: NotionBlock[];
  };
};

export const BlogDetail: VFC<BlogDetailProps> = ({ className, detail }) => {
  const { blocks, ...headerInfo } = detail;

  return (
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
  );
};

const StyledBlogDetail = styled.div`
  > .detail_body {
    padding: 28px 8px;
  }
`;
