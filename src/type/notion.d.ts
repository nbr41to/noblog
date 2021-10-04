import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

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

type NotionSelectOptions = {
  id: string;
  name: string;
  color: NotionColor;
};

type NotionPageItems = QueryDatabaseResponse['results'];
