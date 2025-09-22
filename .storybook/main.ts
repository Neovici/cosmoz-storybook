import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  'stories': [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  'addons': [],
  'framework': {
    'name': '@storybook/web-components-vite',
    'options': {},
  },
  refs: {
    'cosmoz-dropdown': {
      title: 'Cosmoz Dropdown Storybook',
      url: 'https://neovici.github.io/cosmoz-dropdown',
    },
    'cosmoz-omnitable': {
      title: 'Cosmoz Omnitable Storybook',
      url: 'https://neovici.github.io/cosmoz-omnitable',
    },
  },
};
export default config;
