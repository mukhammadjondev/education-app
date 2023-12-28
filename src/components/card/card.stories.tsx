import { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: 'string',
      description: 'Card background color',
      defaultValue: 'primary',
      options: ['primary', 'white'],
      control: {
        type: 'radio',
      }
    }
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Card'
  }
}

export const White: Story = {
  args: {
    color: 'white',
    children: 'Card'
  }
}