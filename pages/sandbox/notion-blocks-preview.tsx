import type { InferGetStaticPropsType, NextPage } from "next";
import type { NotionBlockObjectResponse } from "~/types/notion";

import { TableOfContents } from "~/features/post/TableOfContent";
import { NotionBlockPreview } from "~/features/sandbox/NotionBlockPreview";
import { getChildrenInBlock } from "~/server/notion/blocks";

export const getStaticProps = async () => {
  const response = await getChildrenInBlock(
    process.env.NOTION_PREVIEW_PAGE_ID || ""
  );

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
      <p className="py-4 text-center font-bold">
        Notion API で取得した BlockObject とそれを受けた Component の Preview
      </p>
      <div className="flex justify-between">
        <div className="">
          <TableOfContents
            blocks={blocks.filter((block) => {
              if (
                block.type == "paragraph" &&
                (block.paragraph.rich_text.length === 0 ||
                  block.paragraph.rich_text[0].plain_text.slice(0, 2) === "//")
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
