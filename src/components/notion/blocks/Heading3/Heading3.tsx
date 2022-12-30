import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { FC } from "react";

import { useIntersection } from "@mantine/hooks";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { inViewHeadingIdsAtom } from "~/recoil/atoms";

import { RichText } from "../../RichText";

type Props = {
  block: Heading3BlockObjectResponse;
};

export const Heading3: FC<Props> = ({ block }) => {
  const setInViewHeading = useSetRecoilState(inViewHeadingIdsAtom);
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (!entry) return;

    if (entry?.isIntersecting) {
      setInViewHeading((prev) => [...prev, block.id]);
    } else {
      setInViewHeading((prev) => prev.filter((id) => id !== block.id));
    }
  }, [entry, block.id, setInViewHeading]);

  return (
    <h3
      id={block.id}
      className="my-4 border-0 border-b-2 border-solid border-slate-800 pl-2 text-lg font-bold sp:border-slate-500 sp:text-base"
      ref={ref}
    >
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
