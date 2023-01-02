import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

export const parameters = {
  backgrounds: {
    default: 'orange',
    values: [
      { name: 'orange', value: '#ffedd5' },
      { name: 'slate', value: '#1e293b' },
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    );
  },
];
