import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Rating from "./rating";

const meta = {
  title: 'Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof Rating>

export const Model: Story = {
  args: {
    rating: 4,
  }
}

export const Editable: Story = {
  render: () => {
    const [rating, setRating] = useState(2)

    return <Rating rating={rating} setRating={setRating} isEditabled={true} />
  }
}

export const Error: Story = {
  args: {
    rating: 0,
    error: {type: '', message: 'Rating is required'}
  }
}