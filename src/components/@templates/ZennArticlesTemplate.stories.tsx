import type { Meta, StoryObj } from '@storybook/react';

import exampleArticles from '~/mocks/zenn_articles.json';

import { ZennArticlesTemplate as Component } from './ZennArticlesTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    articles: exampleArticles,
  },
};
