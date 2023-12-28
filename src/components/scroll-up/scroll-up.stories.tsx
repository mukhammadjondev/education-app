import { Meta, StoryObj } from "@storybook/react";
import Heading from "../heading/heading";
import ScrollUp from "./scroll-up";

const meta = {
  title: 'ScrollUp',
} satisfies Meta<typeof ScrollUp>

export default meta
type Story = StoryObj<typeof ScrollUp>

export const Model: Story = {
  render: () => (
    <div style={{height: '200vh'}}>
      <Heading tag="h1">Scroll Down</Heading>
      <ScrollUp />
    </div>
  )
}