import {Preview} from '@storybook/react';

const preview: Preview = {
  parameters: {
    // NOTE: From migration to Storybook 8 (from 7)
    //     In Storybook you can write so-called play functions, which are used to render your stories interactively.   │
    // │   Mocking action args in play functions was done implicitly by analyzing the argTypesRegex.                   │
    // │                                                                                                               │
    // │   Since Storybook 8, implicit action args mocking isn't supported anymore.                                    │
    // │                                                                                                               │
    // │   Use the following command to check for mocked action usages in your play functions:                         │
    // │   npx storybook migrate find-implicit-spies --glob="**/*.stories.@(js|jsx|ts|tsx)"                            │
    // │                                                                                                               │
    // │   And follow the documentation to migrate your play functions:                                                │
    // │   https://storybook.js.org/docs/8.0/essentials/actions#via-storybooktest-fn-spy-function
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
