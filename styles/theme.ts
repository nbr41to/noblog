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
    main: '#f5f5f5',
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
      background-color: #f5f5f5cc;
      border-radius: 8px;
      box-shadow: -1.5px -1.5px 2px hsl(0deg 0% 100% / 95%),
        1px 1px 3px rgb(28 64 128 / 15%);
    `,
    inner: () => css`
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: -1.5px -1.5px 2px hsl(0deg 0% 100% / 95%),
        1px 1px 3px rgb(28 64 128 / 15%);
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
