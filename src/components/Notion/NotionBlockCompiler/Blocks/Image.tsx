import NextImage from 'next/image';
import { useEffect, useMemo, useState, VFC } from 'react';
import styled from 'styled-components';

import { useImageUrl } from '@/hooks/useImageUrl';
import { NotionBlock } from '@/type/notion';

/* 多分今後は使用しない（APIのコスパが悪いため） */

type ImageProps = {
  className?: string;
  block: Extract<NotionBlock, { type: 'image' }>;
};

export const Image: VFC<ImageProps> = ({ className, block }) => {
  const [success, setSuccess] = useState(true);
  const [src, setSrc] = useState('/dummy');

  const { url } = useImageUrl({
    blockId: success ? null : block.id,
    initialState: {
      url: block.image.type === 'file' ? block.image.file.url : '',
    },
  });

  // eslint-disable-next-line no-console
  console.log('image: ', success);
  // eslint-disable-next-line no-console
  console.log('image: ', url);
  // eslint-disable-next-line no-console
  console.log('decoded url: ', decodeURIComponent(url));

  const altText = useMemo(() => {
    return block.image.caption[0]?.plain_text || 'image of content';
  }, [block]);

  useEffect(() => {
    (async () => {
      const data = await fetch(url);
      // eslint-disable-next-line no-console
      console.log('url fetch data: ', data);
      if (data.status === 200) {
        setSrc(url);
        setSuccess(true);
        return;
      }
      setSuccess(false);
    })();
    setSrc(url);
  }, [block, success]);

  return (
    <StyledImage className={`${className}`}>
      {url ? (
        <NextImage src={src} alt={altText} layout="fill" objectFit="contain" />
      ) : (
        <div>Loading...</div>
      )}
      {/* 画像を取得するボタン案 */}
    </StyledImage>
  );
};

const StyledImage = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100%;
  min-height: 400px;
  max-height: 720px;
  margin: 8px auto;
  position: relative;
`;
