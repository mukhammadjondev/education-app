import { Meta, StoryObj } from "@storybook/react";
import Text from "./text";

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
			type: 'string',
			description: 'Text size',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'radio',
			},
		},
  }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Text',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Text',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Text',
  },
}