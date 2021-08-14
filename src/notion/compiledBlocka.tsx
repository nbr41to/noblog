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
    case 'numbered_list_item': // 未対応
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
    case 'child_page': // page block 未対応
      return (
        <div className={`${type}`}>ページがここにありますが,表示不可です.</div>
      );
    default:
      return <p>[例外ブロックです]</p>;
  }
};
