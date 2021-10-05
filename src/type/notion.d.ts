import {
  GetPageResponse,
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

type NotionColor =
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

type NotionSelectOption = {
  id: string;
  name: string;
  color: NotionColor;
};

type DatabaseProperties = { [property: string]: NotionSelectOption[] };

type NotionPageItem = QueryDatabaseResponse['results'][number];

type NotionBlock = ListBlockChildrenResponse['results'][number];

type NotionPageContent = {
  pageInfo: GetPageResponse;
  blocks: NotionBlock[];
};
