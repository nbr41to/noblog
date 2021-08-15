import 'styled-components';
import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export const theme = {
  name: 'Default Theme',
  fonts: {},
  colors: {
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
    outer: css`
      border: 2px solid #999;
      border-radius: 8px;
      background-color: #fffc;
    `,
    inner: css`
      border: 2px solid #ccc;
      border-radius: 8px;
      background-color: #fff;
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
