import { GetStaticProps } from 'next';
import { VFC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { getPageContent } from 'src/apis/notion';
import styled from 'styled-components';

import { NotionBlock } from '@/components/Notion/NotionBlock';

export const getStaticProps: GetStaticProps = async () => {
  const blocks = await getPageContent('d362dedb260c4fa7b13257f119ea8d06');
  return {
    props: {
      blocks: blocks.results,
    },
  };
};

type NotionPreviewProps = {
  className?: string;
  blocks: any;
};

const NotionPreview: VFC<NotionPreviewProps> = ({ className, blocks }) => {
  // console.log(blocks);

  return (
    <StyledNotionPreview className={`${className}`}>
      <h1>Notion Preview</h1>
      <div className="previews">
        {blocks?.map((block) => (
          <>
            <div className="preview">
              <NotionBlock block={block} />
            </div>
            <SyntaxHighlighter language="json" style={monokai}>
              {JSON.stringify(block, null, 4)}
            </SyntaxHighlighter>
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
