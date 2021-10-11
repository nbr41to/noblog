import NextImage from 'next/image';
import { memo, useEffect, useMemo, useState, VFC } from 'react';
import styled from 'styled-components';

import { useImageUrl } from '@/hooks/useImageUrl';
import { NotionBlock } from '@/type/notion';

/* 多分今後は使用しない（APIのコスパが悪いため） */

type ImageProps = {
  className?: string;
  block: Extract<NotionBlock, { type: 'image' }>;
};

export const Image: VFC<ImageProps> = memo(({ className, block }) => {
  const [success, setSuccess] = useState(true);

  const { url } = useImageUrl({
    blockId: success ? null : block.id,
    initialState: {
      url: block.image.type === 'file' ? block.image.file.url : '',
    },
  });

  // eslint-disable-next-line no-console
  console.log('success: ', success);
  // eslint-disable-next-line no-console
  console.log('image: ', url);

  const altText = useMemo(() => {
    return block.image.caption[0]?.plain_text || 'image of content';
  }, [block]);

  useEffect(() => {
    (async () => {
      const data = await fetch(url);
      // eslint-disable-next-line no-console
      console.log('url fetch data: ', data);
      if (data.status === 200) {
        setSuccess(true);
        return;
      }
      setSuccess(false);
    })();
  }, [block, success]);

  return (
    <StyledImage className={`${className}`}>
      <>
        <NextImage src={url} alt={altText} layout="fill" objectFit="contain" />
        {/* 画像を取得するボタン案 */}
        {!success && <p>画像が表示されませんか？</p>}
      </>
    </StyledImage>
  );
});

const StyledImage = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100%;
  min-height: 400px;
  max-height: 720px;
  margin: 8px auto;
  position: relative;
`;
