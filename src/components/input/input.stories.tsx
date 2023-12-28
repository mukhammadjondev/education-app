import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

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