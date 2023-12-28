import { Meta, StoryObj } from "@storybook/react";
import Tag from "./tag";

const meta = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'green', 'red'],
      control: { type: 'select' }
    },
    size: {
      type: 'string',
      defaultValue: 'md',
      options: ['md', 'sm'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof Tag>

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Text'
  }
}

export const Green: Story = {
  args: {
    color: 'green',
    children: 'Text'
  }
}

export const Red: Story = {
  args: {
    color: 'red',
    children: 'Text'
  }
}

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    children: 'Text'
  }
}


export const Medium: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Text'
  }
}