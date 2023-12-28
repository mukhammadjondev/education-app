import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Heading from "../heading/heading";
import Error from "./error";
import ReviewForm from "./review-form";
import Success from "./success";

const meta = {
  title: 'ReviewForm',
  component: ReviewForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewForm>

export default meta
type Story = StoryObj<typeof ReviewForm>
type StorySuccess = StoryObj<typeof Success>
type StoryError = StoryObj<typeof Error>

export const Form: Story = {
  args: {
    productId: '01',
  }
}

export const SuccessMessage: StorySuccess = {
  render: () => {
    const [isSuccess, setIsSuccess] = useState(true)

    return isSuccess ? <Success setIsSuccess={setIsSuccess} /> : <Heading tag="h1">No message</Heading>
  }
}

export const ErrorMessage: StoryError = {
  render: () => {
    const [isError, setIsError] = useState(true)

    return isError ? <Error setError={setIsError} /> : <Heading tag="h1">No message</Heading>
  }
}