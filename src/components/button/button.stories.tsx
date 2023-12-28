import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import { useState } from "react";

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
		appearance: {
			type: 'string',
			description: 'Button color style',
			defaultValue: 'primary',
			options: ['primary', 'ghost', 'success', 'failure'],
			control: {
				type: 'select',
			},
		},
		size: {
			type: 'string',
			description: 'Button size',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'radio',
			},
		},
    arrow: {
      type: 'string',
      description: 'Change arrow position',
      defaultValue: 'none',
      options: ['none', 'down', 'right'],
      control: {
        type: 'radio',
      }
    },
    onClick: {
      type: 'function',
      description: 'Change arrow position',
    },
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    appearance: 'primary',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    appearance: 'ghost',
    children: 'Button',
  },
}

export const Success: Story = {
  args: {
    appearance: 'success',
    children: 'Button',
  },
}

export const Failure: Story = {
  args: {
    appearance: 'failure',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    appearance: 'primary',
    size: 'sm',
    children: 'Button',
  },
}

export const Medium: Story = {
  args: {
    appearance: 'primary',
    size: 'md',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    appearance: 'primary',
    size: 'lg',
    children: 'Button',
  },
}

export const Arrow: Story = {
  args: {
    children: 'Button',
    appearance: 'primary',
    onClick: () => {},
  },
  render: (args) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleButton = () => setToggle(prev => !prev)

    return <Button {...args} arrow={toggle ? 'down' : 'right'} onClick={toggleButton} />
  }
}