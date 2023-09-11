import type { NextRequest } from 'next/server';

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 50) : '';

    return new ImageResponse(
      (
        <div tw="relative flex h-full w-full flex-col flex-wrap items-center justify-center bg-orange-100 text-slate-800">
          {title ? (
            <div tw="w-[1000px] whitespace-pre-wrap text-[72px] font-bold mx-auto">
              {title}
            </div>
          ) : (
            <div tw="text-[140px]">のぶろぐ</div>
          )}
          {title ? (
            <div tw="absolute bottom-2 right-6 text-[72px]">のぶろぐ</div>
          ) : (
            <div tw="h-2 w-60 rounded-full bg-slate-800" />
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'fluentFlat',
      },
    );
  } catch (error) {
    const imageData = await fetch(
      new URL('../../../public/noblog_og.png', import.meta.url),
    );
    const buffer = await imageData.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            background: '#f6f6f6',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // @ts-expect-error @vercel/ogの仕様都合
            src={buffer}
            width="256"
            height="256"
            alt="og image"
          />{' '}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }
}
