import { NotionPageItem } from '@/type/notion';

declare module '*/blog_item.json' {
  const value: NotionPageItem;
  export = value;
}
