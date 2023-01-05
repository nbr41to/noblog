import type {
  BlockObjectResponse,
  CommentObjectResponse,
  CreateCommentParameters,
  DatabaseObjectResponse,
  ListCommentsResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

/* Replace */
export type NotionDatabaseObjectResponse = DatabaseObjectResponse;
export type NotionPageObjectResponse = PageObjectResponse;
export type NotionBlockObjectResponse = BlockObjectResponse;
export type NotionListCommentsResponse = ListCommentsResponse;
export type NotionCommentObjectResponse = CommentObjectResponse;
export type NotionRichTextItemResponse = RichTextItemResponse;
export type NotionCreateCommentParameters = CreateCommentParameters; // Request only

/* Extract */
export type NotionDatabaseProperty = NotionDatabaseObjectResponse['properties'];
export type NotionDatabasePropertyConfigResponse =
  NotionDatabaseObjectResponse['properties'][string];
export type NotionSelectPropertyResponse = Extract<
  NotionDatabasePropertyConfigResponse,
  { type: 'select' }
>['select']['options'][number];
export type NotionSelectColor = NotionSelectPropertyResponse['color'];
export type NotionRichTextItemRequest =
  CreateCommentParameters['rich_text'][number]; // Request only

/* Custom */
export type NotionPostMeta = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  category: NotionSelectPropertyResponse;
  date: string;
  updatedAt: string;
  tags: NotionSelectPropertyResponse[];
  likes: number;
};
export type NotionPost = NotionPostMeta & {
  children: NotionBlockObjectResponse[];
};
export type NotionBlogProperties = {
  categories: NotionSelectPropertyResponse[];
  tags: NotionSelectPropertyResponse[];
};
export type NotionBlogPropertiesWithCount = {
  categories: (NotionSelectPropertyResponse & { count: number })[];
  tags: (NotionSelectPropertyResponse & { count: number })[];
};
