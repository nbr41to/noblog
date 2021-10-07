import 'styled-components';

import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export const theme = {
  name: 'Base Theme',
  fonts: {},
  colors: {
    mainBg: '#fffa',
    orange: '#d4680f',
    yellow: '#daa104',
    blue: '#0e638e',
    red: '#db3636',
    green: '#117061',
    gray: '#83827f',
    brown: '#593e33',
    pink: '#f566f5',
    purple: '#5e389b',
  },
  box: {
    outer: () => css`
      border: 2px solid #999;
      border-radius: 8px;
      background-color: #fffc;
    `,
    inner: () => css`
      border: 2px solid #ccc;
      border-radius: 8px;
      background-color: #fff;
    `,
  },
  mixins: {
    asideTitle: () => css`
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #444;
      padding-bottom: 4px;
      margin: 0 12px;
      border-bottom: 1px solid #ccc;
    `,
  },

  media: {
    sp: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 768px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
} as const;

type AppTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends AppTheme {}
}
