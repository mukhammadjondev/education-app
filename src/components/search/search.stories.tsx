import { Meta, StoryObj } from "@storybook/react";
import Search from "./search";

const meta = {
  title: 'Search',
  component: Search,
  tags: ['autodocs'],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof Search>

export const Model: Story = {}