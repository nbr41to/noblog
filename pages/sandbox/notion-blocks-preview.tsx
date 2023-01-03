import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { TableOfContents } from '~/components/features/notionBlog/TableOfContents';
import { NotionBlockPreview } from '~/features/sandbox/NotionBlockPreview';
import { getChildrenInBlock } from '~/server/notion/blocks';
import { previewPageId } from '~/server/notion/ids';

export const getStaticProps = async () => {
  const response = await getChildrenInBlock(previewPageId);

  return {
    props: {
      blocks: response.results as NotionBlockObjectResponse[],
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NotionBlockPreviewPage: NextPage<Props> = ({ blocks }) => {
  return (
    <div>
      <p className="py-4 text-center font-bold sp:p-2">
        Notion API で取得した BlockObject とそれを受け取った Component の
        Preview
      </p>

      <div className="flex justify-between gap-6">
        <div className="hidden w-72 md:block">
          <TableOfContents
            blocks={blocks.filter((block) => {
              if (
                block.type === 'paragraph' &&
                (block.paragraph.rich_text.length === 0 ||
                  block.paragraph.rich_text[0].plain_text.slice(0, 2) === '//')
              ) {
                // 最初の2文字が "//" の場合は表示しない
                return false;
              }

              return true;
            })}
            isAll
          />
        </div>

        <div className="w-main">
          <NotionBlockPreview blocks={blocks} />
        </div>
      </div>
    </div>
  );
};

export default NotionBlockPreviewPage;
