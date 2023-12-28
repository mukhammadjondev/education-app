import { Meta, StoryObj } from "@storybook/react";
import Review from "./review";

const meta = {
  title: 'Review',
  component: Review,
  tags: ['autodocs'],
} satisfies Meta<typeof Review>

export default meta
type Story = StoryObj<typeof Review>

const review = {
  "_id": "625da7d8fa53c43fb7e25e18",
  "name": "Omar",
  "title": "Greatfull course for beginner",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa quae inventore vitae corrupti a cupiditate soluta illum incidunt eligendi!",
  "rating": 3,
  "productId": "60637a279e11fc8bb4346a63"
}

export const Model: Story = {
  args: {review},
}