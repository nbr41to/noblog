import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { compileText } from './compileText';

/* notion_block_types = [
  'paragraph',
  'unsupported',
  'heading_1',
  'heading_2',
  'heading_3',
  'bulleted_list_item',
  'numbered_list_item',
  'to_do',
  'toggle',
  'child_page',
] as const; */

export const compiledBlock = (block: any): JSX.Element => {
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
    case 'toggle': // childrenを取得ロジックが必要なので未対応
      return <div className={`${type}`}>{compileText(text)}</div>;
    case 'child_page': // page block 非対応
      return (
        <div className={`${type}`}>ページがここにありますが,表示不可です.</div>
      );
    case 'bookmark':
      /* TODO）リンク先のOGPは含まれていない... */
      return (
        <a className={`${type}`} href={block[type].url}>
          {block[type].url}
        </a>
      );
    case 'image':
      return (
        <div className={`${type}`}>
          <Image
            src={block[type].file.url}
            alt="image in blog"
            layout="fill"
            objectFit="contain"
          />
        </div>
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
          >
            {block[type].text.map(({ plain_text }) => plain_text)}
          </SyntaxHighlighter>
        </div>
      );
    default:
      // console.log(block);
      return <p>[例外ブロックです: {block.type}]</p>;
  }
};
