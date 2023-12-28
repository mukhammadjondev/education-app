import { AdvantageData } from '@/src/interfaces/page.interface';
import { Meta, StoryObj } from '@storybook/react';
import Advantages from './advantages';

const meta = {
  title: 'Advantages',
  component: Advantages,
} satisfies Meta<typeof Advantages>

export default meta
type Story = StoryObj<typeof meta>

const arr: AdvantageData[] = [
	{
		title: 'ReactJS class component',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
		id: '1',
	},
	{
		title: 'VueJS directive',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
		id: '2',
	},
	{
		title: 'NextJS Server Side Rendering',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
		id: '3',
	},
	{
		title: 'SEO',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
		id: '4',
	},
]

export const Advantage: Story = {
	args: {
		advantages: arr,
	},
}