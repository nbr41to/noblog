import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

/* Copy & Paste */
export type NotionSelectColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

/* Replace */
export type NotionPageObjectResponse = PageObjectResponse;
export type NotionBlockObjectResponse = BlockObjectResponse;
export type NotionRichTextItemResponse = RichTextItemResponse;

/* Custom */
export type NotionPostMeta = {
  id: string;
  icon: string;
  title: string;
  category: string;
  date: string;
  updatedAt: string;
  tags: {
    id: string;
    name: string;
    color: NotionSelectColor;
  }[];
  likes: number;
};
export type NotionPost = NotionPostMeta & {
  children: NotionBlockObjectResponse[];
};
