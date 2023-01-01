import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Meta, StoryObj } from '@storybook/react';

import { Bookmark as Component } from './Bookmark';
import exampleBlock from './example.json';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: {
      ...(exampleBlock as BookmarkBlockObjectResponse),
      ogp: {
        url: 'https://www.hashicorp.com/products/terraform/pricing',
        title: 'HashiCorp Terraform: Enterprise Pricing, Packages & Features',
        description:
          'HashiCorp offers three editions of Terraform: Open Source, Terraform Cloud, and Terraform Enterprise.',
        imageUrl:
          'https://www.datocms-assets.com/2885/1632350732-terraform-share.png',
        faviconUrl:
          'https://www.google.com/s2/favicons?domain=https://www.hashicorp.com/products/terraform/pricing',
      },
    },
  },
};
export const NoOgp: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as BookmarkBlockObjectResponse,
  },
};
