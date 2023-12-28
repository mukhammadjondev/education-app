import { Meta, StoryObj } from "@storybook/react";
import Divider from "./divider";

const meta = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof Divider>

export const Primary: Story = {}