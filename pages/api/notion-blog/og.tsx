import type { NextRequest } from 'next/server';

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};
const fontBallo = fetch(
  new URL('../../../src/styles/Baloo-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const fontBalooData = await fontBallo;

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
          <div tw="text-[140px]">noblog</div>
        )}
        {title ? (
          <div tw="absolute bottom-2 right-6 text-[72px]">noblog</div>
        ) : (
          <div tw="h-2 w-60 rounded-full bg-slate-800" />
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'fluentFlat',
      fonts: [
        {
          name: 'Baloo',
          data: fontBalooData,
          style: 'normal',
        },
      ],
    }
  );
}
