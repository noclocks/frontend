import React from 'react';
import type {Meta} from '@storybook/react';
import {fn} from '@storybook/test';

import {Header} from './Header';
import {StoryObj} from '@storybook/react';

const meta: Meta<typeof Header> = {
  // export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      description: 'The user currently logged in',
      control: {
        type: 'text',
      },
    },
    onLogin: {
      description: 'The action to log in',
      control: {
        type: 'function',
      },
    },
  },
  args: {
    user: '',
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: 'Jane Doe',
  },
  argTypes: {
    user: {
      defaultValue: 'Jane Doe',
      control: {
        type: 'text',
      },
    },
  },
};

export const LoggedOut: Story = {
  argTypes: {
    user: {
      defaultValue: null,
      if: {
        arg: 'user',
        exists: false,
      },
      control: {
        type: null,
      },
    },
  },
  render: (args) => (
    <Header
      {...args}
      user={null}
    />
  ),
};
