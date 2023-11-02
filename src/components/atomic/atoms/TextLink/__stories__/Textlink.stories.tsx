import type { Meta, StoryObj } from '@storybook/react';
import TextLink from '../TextLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Text Link',
  component: TextLink,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextLink>;
export default meta;

type Story = StoryObj<typeof TextLink>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    kind: 'primary',
    to: '#',
    children: 'Text Link',
  },
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    to: '#',
    children: 'Text Link',
  },
};

