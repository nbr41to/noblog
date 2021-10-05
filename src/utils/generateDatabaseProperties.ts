/* Require Node.js */
import fs from 'fs';
import path from 'path';

import { NotionSelectOption } from '@/type/notion';

/* getStaticProps内で取得したデータをJSONで書き出してくれる関数 */
export const generateDatabaseProperties = (properties: {
  [property: string]: NotionSelectOption[];
}): void => {
  fs.writeFileSync(
    path.resolve('./src/data/', 'database-properties.json'),
    JSON.stringify(properties, null, '  '),
    'utf-8',
  );
};
