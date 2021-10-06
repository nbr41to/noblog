import { GetStaticProps, NextPage } from 'next';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { getBlocksInPage } from 'src/apis/notion';
import styled from 'styled-components';

import { NotionBlockCompiler } from '@/components/Notion/NotionBlockCompiler';
import { NotionBlock } from '@/type/notion';

export const getStaticProps: GetStaticProps = async () => {
  const blocks = await getBlocksInPage(process.env.NOTION_PREVIEW_PAGE_ID);
  return {
    props: {
      blocks,
    },
  };
};

type NotionPreviewProps = {
  className?: string;
  blocks: NotionBlock[];
};

const NotionPreview: NextPage<NotionPreviewProps> = ({ className, blocks }) => {
  return (
    <StyledNotionPreview className={`${className}`}>
      <h1>Notion Preview</h1>
      <div className="previews">
        {blocks?.map((block) => (
          <>
            {/* プレビュー */}
            <div className="preview">
              <NotionBlockCompiler block={block} />
            </div>
            {/* JSONで情報を表示 */}
            <SyntaxHighlighter language="json" style={monokai}>
              {JSON.stringify(block, null, 4)}
            </SyntaxHighlighter>
            {/* MEMO */}
          </>
        ))}
      </div>
    </StyledNotionPreview>
  );
};

const StyledNotionPreview = styled.div`
  > .previews {
    > .preview {
      border: 1px solid #666;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
    }
    > pre {
      white-space: pre;
      word-break: break-all;
    }
  }
`;

export default NotionPreview;
