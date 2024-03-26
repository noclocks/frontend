import type {Meta} from '@storybook/react';
import {fn, within} from '@storybook/test';

import {Button} from './Button';
import {StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Example/Button',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: {
      description: 'What background color to use',
      control: {
        type: 'color',
      },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: {onClick: fn()},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'medium',
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    console.log('canvas', canvas);
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    variant: 'secondary',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    variant: 'secondary',
  },
};
