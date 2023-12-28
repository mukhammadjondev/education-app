import { Meta, StoryObj } from "@storybook/react";
import HhData from "./hh-data";

const meta = {
  title: 'HhData',
  component: HhData,
  tags: ['autodocs'],
  argTypes: {
    count: {
      type: 'number',
      description: 'Vacancy of developers',
    },
    juniorSalary: {
      type: 'number',
      description: 'Developer salary',
    },
    middleSalary: {
      type: 'number',
      description: 'Developer salary',
    },
    seniorSalary: {
      type: 'number',
      description: 'Developer salary',
    },
  }
} satisfies Meta<typeof HhData>

export default meta
type Story = StoryObj<typeof HhData>

const data = {
  count: 1100,
  juniorSalary: 500,
  middleSalary: 1200,
  seniorSalary: 1800,
}

export const Salary: Story = {
  args: {...data},
}