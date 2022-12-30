import type { NotionBlockObjectResponse } from '~/types/notion';

import { MdNotInterested } from 'react-icons/md';

import { Bookmark } from './blocks/Bookmark';
import { BulletedListItem } from './blocks/BulletedListItem';
import { Callout } from './blocks/Callout';
import { Code } from './blocks/Code';
import { Divider } from './blocks/Divider';
import { Heading1 } from './blocks/Heading1';
import { Heading2 } from './blocks/Heading2';
import { Heading3 } from './blocks/Heading3';
import { Image } from './blocks/Image';
import { NumberedListItem } from './blocks/NumberedListItem';
import { Paragraph } from './blocks/Paragraph';
import { Quote } from './blocks/Quote';
import { ToDo } from './blocks/ToDo';

export const blockToJsx = (block: NotionBlockObjectResponse) => {
  const blockType = block.type;

  switch (blockType) {
    case 'paragraph':
      return <Paragraph block={block} />;
    case 'heading_1':
      return <Heading1 block={block} />;
    case 'heading_2':
      return <Heading2 block={block} />;
    case 'heading_3':
      return <Heading3 block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'bulleted_list_item':
      return <BulletedListItem block={block} />;
    case 'numbered_list_item':
      return <NumberedListItem block={block} />;
    case 'to_do':
      return <ToDo block={block} />;
    case 'code':
      return <Code block={block} />;
    case 'quote':
      return <Quote block={block} />;
    case 'bookmark':
      return <Bookmark block={block} />;
    case 'divider':
      return <Divider />;
    case 'image':
      // eslint-disable-next-line jsx-a11y/alt-text
      return <Image block={block} />;
    case 'table_of_contents':
      return null;
    default:
      return (
        <div className="my-6 flex items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 sp:flex-col sp:text-center">
          <MdNotInterested size={40} />
          <div className="sp:text-sm">
            <div>ここで、対応していない NotionのBlockが使用されています。</div>
            <div className="mt-2 font-firaCode">
              Not supported:
              {blockType
                ? ` '${blockType}' type is not supported.`
                : 'Unsupported at Notion API.'}
            </div>
          </div>
        </div>
      );
  }
};
