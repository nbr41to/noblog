// import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { NotionBlock } from '@/type/notion';

import { Bookmark } from './Blocks/Bookmark';
import { Callout } from './Blocks/Callout';
import { Image } from './Blocks/Image';
import { Quote } from './Blocks/Quote';
import { compileText } from './compileText';

export const compiledBlock = (block: NotionBlock): JSX.Element => {
  const { type } = block;
  const { text } = block[type];

  switch (block.type) {
    case 'unsupported':
      return <div>[Use unsupported block.]</div>;
    case 'paragraph':
      return <p className={`${type}`}>{compileText(text)}</p>;
    case 'heading_1':
      return <h1 className={`${type}`}>{compileText(text)}</h1>;
    case 'heading_2':
      return <h2 className={`${type}`}>{compileText(text)}</h2>;
    case 'heading_3':
      return <h3 className={`${type}`}>{compileText(text)}</h3>;
    case 'bulleted_list_item':
      return <li className={`${type}`}>{compileText(text)}</li>;
    case 'numbered_list_item': // 非対応
      return <li className={`${type}`}>{compileText(text)}</li>;
    case 'to_do':
      return (
        <li
          className={`${type} ${
            block.type === 'to_do' ? block.to_do.checked.toString() : ''
          }`}
        >
          {compileText(text)}
        </li>
      );
    case 'quote':
      return <Quote block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'toggle': // childrenを取得ロジックが必要なので未対応
      return <div className={`${type}`}>{compileText(text)}</div>;
    case 'child_page': // page block 非対応
      return (
        <div className={`${type}`}>ページがここにありますが,表示不可です.</div>
      );
    case 'bookmark':
      return <Bookmark className={`${type}`} url={block[type].url} />;
    case 'image':
      return (
        <Image block={block} />
        /* TODO)いずれ下に戻したほうが良さそう */
        // <div className={`${type}`}>
        //   <Image
        //     src={block[type].file.url}
        //     alt="image in blog"
        //     layout="fill"
        //     objectFit="contain"
        //   />
        // </div>
      );
    case 'video':
      /* YouTubeのEmbed type: "external" */
      // console.log(block);
      // console.log(block[type].external.url);
      /* "https://www.youtube.com/embed/hogehoge"に変換する必要あり */
      return (
        // <iframe className={`${type}`} src={block[type].external.url}></iframe>
        <iframe
          className={`${type}`}
          src={'https://www.youtube.com/embed/8Ok-_r4NIJE'}
          width="560"
          height="315"
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    case 'code':
      return (
        <div className={`${type}`}>
          <div className="code_block_label">{block[type].language}</div>
          <SyntaxHighlighter
            language={block[type].language.toLowerCase()}
            style={monokai}
            customStyle={{ padding: '12px 16px', lineHeight: '28px' }}
          >
            {block[type].text.map(({ plain_text }) => plain_text)}
          </SyntaxHighlighter>
        </div>
      );
    default:
      // console.log(block);
      return <p>[未対応Block] type: {block.type}</p>;
  }
};
