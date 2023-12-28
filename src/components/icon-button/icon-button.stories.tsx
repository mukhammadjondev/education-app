import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./icon-button";

const meta = {
  title: 'IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      type: 'string',
      defaultValue: 'menu',
      options: ['menu', 'close', 'up'],
      control: { type: 'radio' }
    },
    appearance: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'white'],
      control: { type: 'radio' },
    },
  }
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

export const MenuIcon: Story = {
  args: {
    icon: 'menu',
    appearance: 'primary'
  }
}

export const CloseIcon: Story = {
  args: {
    icon: 'close',
    appearance: 'primary'
  }
}

export const UpIcon: Story = {
  args: {
    icon: 'up',
    appearance: 'primary'
  }
}