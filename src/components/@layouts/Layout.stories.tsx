import type { Meta, StoryObj } from '@storybook/react';

import { Layout as Component } from './Layout';

export default {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: <div className="py-20 px-8">Page Content</div>,
  },
};

export const LongPageContent: StoryObj<typeof Component> = {
  args: {
    children: (
      <div className="py-20 px-8">
        <h2>title</h2>
        <div className="space-y-3">
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
        </div>
      </div>
    ),
  },
};

// export const Parameters = { layout: 'fullscreen' };
