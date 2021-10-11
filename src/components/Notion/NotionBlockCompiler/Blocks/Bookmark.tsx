import { memo, useMemo, VFC } from 'react';
import styled from 'styled-components';

import { useOgp } from '@/hooks/useOgp';

/* NotionBlockのBookmarkを表示するComponent */

type BookmarkProps = {
  className?: string;
  url: string;
};

export const Component: VFC<BookmarkProps> = ({ className, url }) => {
  const { data } = useOgp(url);

  const siteInfo = useMemo(() => {
    if (!data) return;
    const ogp = data.ogp;
    return {
      title: data?.title || 'no title',
      description: 'og:description' in ogp ? ogp['og:description'][0] : '　',
      imageUrl: 'og:image' in ogp ? ogp['og:image'][0] : '',
    };
  }, [data]);

  return (
    <StyledBookmark
      className={`${className}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {siteInfo ? (
        <div className="embed_wrapper">
          <div className="title">{siteInfo.title}</div>
          <div className="description">{siteInfo.description}</div>
          {siteInfo.imageUrl && (
            <div className="image_wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteInfo.imageUrl} alt="site image" />
            </div>
          )}
          <div className="url_text">{url}</div>
          <div className="label">参考URL</div>
        </div>
      ) : (
        <div className="plain_url">{url}</div>
      )}
    </StyledBookmark>
  );
};

const StyledBookmark = styled.a`
  cursor: pointer;

  > .plain_url {
    color: blue;
    text-decoration: underline;
    margin: 8px 0;
    padding: 4px;
    word-wrap: break-word;
  }

  > .embed_wrapper {
    margin: 16px 0;
    padding: 8px 16px;
    border: 1px solid #444;
    border-radius: 8px;
    background-color: #fff;
    position: relative;

    > .title {
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #444;
      padding: 0 4px 4px;
      margin: 8px 0;
    }
    > .description {
      font-size: 14px;
      padding: 0 8px;
      margin: 8px 0;
    }
    > .image_wrapper {
      height: 120px;
      text-align: center;
      > img {
        height: 100%;
      }
    }
    > .url_text {
      font-size: 14px;
      padding: 0 8px;
      margin: 8px 0;
    }
    > .label {
      display: inline-block;
      font-size: 12px;
      color: #fff;
      background-color: #444;
      border-bottom-right-radius: 8px;
      padding: 4px 8px;
      position: absolute;
      right: -1px;
      bottom: -1px;
    }
  }
`;

export const Bookmark = memo(Component);
