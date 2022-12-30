import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { FC } from "react";

import { RichText } from "../../RichText";

type Props = {
  block: ParagraphBlockObjectResponse;
};

export const Paragraph: FC<Props> = ({ block }) => {
  return (
    <div>
      <RichText text={block.paragraph.rich_text} />
    </div>
  );
};
