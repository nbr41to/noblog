import type { PrismProps } from '@mantine/prism';
import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { Prism } from '@mantine/prism';

import { RichText } from '../../RichText';





type Props = {
  block: CodeBlockObjectResponse;
};

/* Notion の language を Prism の language に変換 */
const languageCompiled = (
  language: string,
): Extract<PrismProps['language'], string> => {
  if (language === 'javascript') return 'jsx';
  if (language === 'typescript') return 'tsx';

  return language as Extract<PrismProps['language'], string>;
};

/* type code */
export const Code: FC<Props> = ({ block }) => {
  const language = languageCompiled(block.code.language) as Extract<
    PrismProps['language'],
    string
  >;

  return (
    <div className='my-8'>
      <div className='-mb-1 rounded-t-md bg-slate-800 px-4 pt-2 pb-3 text-sm text-slate-200'>
        {block.code.language}
      </div>
      <Prism language={language} colorScheme='dark'>
        {block.code.rich_text[0]?.plain_text || ''}
      </Prism>
      {block.code.caption.length > 0 && (
        <div className='-mt-1 rounded-b-md bg-slate-800 px-4 pb-2 pt-3 text-xs text-slate-200'>
          <RichText text={block.code.caption} />
        </div>
      )}
    </div>
  );
};
