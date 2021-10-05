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

type NotionSelectOption = {
  id: string;
  name: string;
  color: NotionColor;
};

type DatabaseProperties = { [property: string]: NotionSelectOption[] };

type NotionPageItems = QueryDatabaseResponse['results'];
