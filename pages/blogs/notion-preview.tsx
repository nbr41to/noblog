import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { getChildrenBlocks } from 'src/apis/notion';
import styled from 'styled-components';

import { NotionBlockCompiler } from '@/components/Notion/NotionBlockCompiler';
import { NotionBlock } from '@/type/notion';

export const getStaticProps: GetStaticProps = async () => {
  const blocks = await getChildrenBlocks(process.env.NOTION_PREVIEW_PAGE_ID);
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
  const [opens, setOpens] = useState<string[]>([]);

  const previewBlocks = useMemo(() => {
    let id = 0;
    const previewBlocks = blocks.map((block) => {
      /* headingのエスケープ... h1で`$`をつける*/
      if (block.type === 'heading_1') {
        const text = block.heading_1.text[0].plain_text;
        if (text.slice(0, 1) === '$') {
          id++;
          return { type: 'heading', content: text, id: id.toString() };
        }
      }
      /* commentのエスケープ... paragraphで`//`をつける */
      if (block.type === 'paragraph') {
        const text = block.paragraph.text[0]?.plain_text;
        if (text?.slice(0, 2) === '//') {
          return { type: 'comment', content: text };
        }
      }
      return { type: 'preview', content: block, id: block.id };
    });
    return previewBlocks;
  }, []);

  const jsonPreviewToggle = (id: string) => {
    if (opens.includes(id)) {
      setOpens(opens.filter((openedId) => openedId !== id));
    } else {
      setOpens([...opens, id]);
    }
  };

  return (
    <StyledNotionPreview className={`${className}`}>
      <h1>Notion Block Previews</h1>
      <div className="toc">
        <h3>Table of Contents</h3>

        {previewBlocks
          .filter((block) => block.type === 'heading')
          .map((block, index) => {
            return (
              <li key={index}>
                <Link href={`/blogs/notion-preview#${block.id}`}>
                  <a>{block.content}</a>
                </Link>
              </li>
            );
          })}
      </div>
      <div>
        {previewBlocks.map((block, index) => {
          if (block.type == 'preview') {
            return (
              <div key={index} className="preview_area">
                {/* プレビュー */}
                <div className="preview">
                  <NotionBlockCompiler block={block.content} />
                </div>
                {/* JSONで情報を表示 */}
                <button onClick={() => jsonPreviewToggle(block.id)}>
                  {opens.includes(block.id) ? 'CLOSE' : 'JSON'}
                </button>
                <div
                  className={`json ${opens.includes(block.id) ? 'open' : ''}`}
                >
                  <SyntaxHighlighter language="json" style={monokai}>
                    {JSON.stringify(block.content, null, 4)}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          }
          if (block.type == 'heading') {
            return (
              <h2 key={index} id={`${block.id}`} className="heading">
                {block.content}
              </h2>
            );
          }
          if (block.type == 'comment') {
            return (
              <div key={index} className="comment">
                {block.content}
              </div>
            );
          }
        })}
      </div>
    </StyledNotionPreview>
  );
};

const StyledNotionPreview = styled.div`
  .toc {
    > h3 {
      margin: 12px 0;
    }
    > li {
      line-height: 28px;
      padding: 4px 0;
      > a {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .preview_area {
    > .preview {
      border: 1px solid #666;
      padding: 16px;
      margin: 16px 0;
      border-radius: 4px;
    }
    > button {
      display: block;
      cursor: pointer;
      border: 1px solid #444;
      border-radius: 4px;
      padding: 8px 28px;
      margin: 16px auto;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover,
      &:active {
        background-color: #444;
        color: #fff;
      }
    }
    > .json {
      border-radius: 4px;
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.2s ease-out;
      &.open {
        height: 100%;
        opacity: 1;
        transition: all 0.2s ease-out;
      }
    }
  }
  .heading {
    font-weight: bold;
    margin: 12px 0;
  }
  .comment {
    padding: 12px;
    color: #444;
  }
`;

export default NotionPreview;
