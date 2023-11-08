import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { CodeHighlight } from '@mantine/code-highlight';

import { RichText } from '~/components/notion/RichText';

type Props = {
  block: CodeBlockObjectResponse;
};

/* Notion の language を CodeHighlight の language に変換 */
// https://highlightjs.readthedocs.io/en/latest/supported-languages.html
const languageCompiled = (language: string) => {
  if (language === 'plain text') return 'plaintext';
  if (language === 'javascript') return 'jsx';
  if (language === 'typescript') return 'tsx';
  if (language === 'mermaid') return 'plaintext';

  return language;
};

/* type code */
export const Code: FC<Props> = ({ block }) => {
  const language = languageCompiled(block.code.language);

  return (
    <div className="my-8">
      <div className="-mb-1 rounded-t-md bg-slate-800 px-4 pb-3 pt-2 text-sm text-slate-200 sp:text-xs">
        {block.code.language}
      </div>
      <CodeHighlight
        language={language}
        code={block.code.rich_text[0]?.plain_text || ''}
      />
      {block.code.caption.length > 0 && (
        <div className="-mt-1 rounded-b-md bg-slate-800 px-4 pb-2 pt-3 text-xs text-slate-200">
          <RichText text={block.code.caption} />
        </div>
      )}
    </div>
  );
};
