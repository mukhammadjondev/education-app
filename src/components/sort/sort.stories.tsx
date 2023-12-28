import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Sort from "./sort";
import { SortEnum } from "./sort.props";

const meta = {
  title: 'Sort',
  component: Sort,
} satisfies Meta<typeof Sort>

export default meta
type Story = StoryObj<typeof Sort>

export const Model: Story = {
  render: () => {
    const [sort, setSort] = useState<SortEnum>(SortEnum.Rating)

    return (
      <div style={{width: 200}}>
        <Sort sort={sort} setSort={setSort} />
      </div>
    )
  }
}