import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import '~base/Base.module.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: { onClick: { action: 'clicked' } },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    children: 'Click me',
  },
};

