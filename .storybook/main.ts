import {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // async viteFinal(config) {
  //   // Add configuration here
  //   return config;
  // },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen',
    // reactDocgenTypescriptOptions: {
    //   compilerOptions: {
    //     allowSyntheticDefaultImports: false,
    //     esModuleInterop: false,
    //   },
    // },
  },
};
export default config;
