import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./text-area";

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof TextArea>

export const TextField: Story = {
  args: {
    placeholder: 'Placeholder',
  }
}

export const ErrorField: Story = {
  args: {
    placeholder: 'Placeholder',
    error: {type: '', message: 'Field is required'}
  }
}