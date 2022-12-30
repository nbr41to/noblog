import type { FC } from "react";
import type { NotionRichTextItemResponse } from "~/types/notion";

import clsx from "clsx";

type Props = {
  text: Array<NotionRichTextItemResponse>;
};

const codeAnnotationClasses =
  "bg-orange-50 rounded px-2 py-1 mx-0.5 font-mono text-red-500";

/* Notion の Block Object内のrich_textの配列をいい感じに変換する */
export const RichText: FC<Props> = ({ text }) => {
  return (
    <p className="inline whitespace-pre-wrap break-words leading-loose">
      {text.length === 0 ? (
        /* textがない場合が空白の改行を入れる */
        <span className="block h-6" />
      ) : (
        <>
          {text.map((textItem, index: number) => {
            const { annotations } = textItem; // アノテーションを取得
            const { color } = textItem.annotations; // アノテーションの色を取得
            const { href } = textItem; // リンクを取得
            const annotationClasses = Object.keys(annotations).filter(
              (param) => annotations[param as keyof typeof annotations] === true
            );
            const key = `${index}`;

            if (href)
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "underline",
                    color !== "default" && `notion-${color}`,
                    annotationClasses.includes("bold") && "font-bold",
                    annotationClasses.includes("italic") && "font-italic",
                    annotationClasses.includes("underline") && "underline",
                    annotationClasses.includes("strikethrough") &&
                      "line-through",
                    annotationClasses.includes("code") && codeAnnotationClasses
                  )}
                >
                  {textItem.plain_text}
                </a>
              );

            if (annotationClasses.length > 0)
              return (
                <span
                  key={key}
                  className={clsx(
                    "",
                    color !== "default" && `notion-${color}`,
                    annotationClasses.includes("bold") && "font-bold",
                    annotationClasses.includes("italic") && "font-italic",
                    annotationClasses.includes("underline") && "underline",
                    annotationClasses.includes("strikethrough") &&
                      "line-through",
                    annotationClasses.includes("code") && codeAnnotationClasses
                  )}
                >
                  {textItem.plain_text}
                </span>
              );

            return textItem.plain_text;
          })}
        </>
      )}
    </p>
  );
};
