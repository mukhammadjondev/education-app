import { Meta, StoryObj } from "@storybook/react";
import Heading from "./heading";

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      type: 'string',
      description: 'Heading size',
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3'],
      control: {
        type: 'radio'
      }
    }
  }
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof Heading>

export const Heading1: Story = {
  args: {
    tag: 'h1',
    children: 'Heading'
  }
}

export const Heading2: Story = {
  args: {
    tag: 'h2',
    children: 'Heading'
  }
}

export const Heading3: Story = {
  args: {
    tag: 'h3',
    children: 'Heading'
  }
}