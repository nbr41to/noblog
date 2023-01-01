import type { NotionRichTextItemRequest } from '~/types/notion';
import type { TiptapJson } from '~/types/tiptap';

const initAnnotations = {
  bold: false,
  italic: false,
  strikethrough: false,
  underline: false,
  code: false,
  color: 'default',
};

export const toRichText = (
  tiptapJson: TiptapJson
): NotionRichTextItemRequest[] => {
  if (!tiptapJson.content) throw new Error('tiptapJson.content is undefined');

  const paragraphContents = tiptapJson.content.flatMap((content) => {
    /* 文字がなく改行のみの場合 */
    if (!('content' in content && content.content)) {
      return { text: { content: '\n' } };
    }

    const lineContentLength = content.content.length;

    return content.content.map((nestedContent, index) => {
      if (!nestedContent?.text) return { text: { content: '\n' } };

      const isLast = index === lineContentLength - 1;

      if (!('marks' in nestedContent && nestedContent.marks)) {
        return { text: { content: nestedContent.text + (isLast ? '\n' : '') } };
      }

      const href = nestedContent.marks.filter((mark) => mark.type === 'link')[0]
        ?.attrs?.href;
      const annotations = nestedContent.marks?.reduce((acc, mark) => {
        switch (mark.type) {
          case 'bold':
            acc.bold = true;
            break;
          case 'italic':
            acc.italic = true;
            break;
          case 'strikethrough':
            acc.strikethrough = true;
            break;
          case 'underline':
            acc.underline = true;
            break;
          case 'code':
            acc.code = true;
            break;
          default:
            break;
        }

        return acc;
      }, initAnnotations);

      return {
        text: {
          content: nestedContent.text + (isLast ? '\n' : ''),
          link: href ? { url: href } : null,
        },
        annotations,
      };
    });
  });

  /* 最後の改行を削除 */
  while (
    paragraphContents[paragraphContents.length - 1].text.content === '\n'
  ) {
    paragraphContents.pop();
  }

  return paragraphContents;
};
