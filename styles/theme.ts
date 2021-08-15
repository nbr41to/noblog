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
  colors: {},
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
