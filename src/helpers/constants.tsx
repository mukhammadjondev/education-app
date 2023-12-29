import { IFirstLevelMenu } from "../interfaces/menu.interface";
import { PageCategory } from "../interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import AmazonIcon from './icons/amazon.svg';
import AmdIcon from './icons/amd.svg';
import CiscoIcon from './icons/cisco.svg';
import DropcamIcon from './icons/dropcam.svg';
import LogitechIcon from './icons/logitech.svg';
import SpotifyIcon from './icons/spotify.svg';
import { MdArchitecture } from 'react-icons/md';
import { FaDev } from 'react-icons/fa';
import { SiJest, SiTypescript } from 'react-icons/si';
import { TbApi, TbBrandNextjs } from 'react-icons/tb';
import { BiErrorCircle, BiGitPullRequest, BiGrid } from 'react-icons/bi';
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import { GrStripe } from 'react-icons/gr';

export const firstLevelMenu: IFirstLevelMenu[] = [
  {route: 'courses', name: 'Courses', id: PageCategory.Courses, icon: <CoursesIcon />},
  {route: 'books', name: 'Books', id: PageCategory.Books, icon: <BooksIcon />},
]

export const navLink = [
  {name: 'Home', route: '/'},
  {name: 'About', route: '/courses/reactjs_id'},
]

export const company = [<AmazonIcon />, <AmdIcon />, <CiscoIcon />, <DropcamIcon />, <LogitechIcon />, <SpotifyIcon />]

export const timeLineList = [
	{
		Icon: SiTypescript,
		title: 'TypeScript',
		text: "TypeScript is a programming language that is a superset of JavaScript and is compiled into it. Thanks to the type system and additional features, it allows you to write large applications that are easy to maintain and develop. Instead of detecting errors at runtime, you quickly check the compile time of your code and get tight integration with your IDE for fast coding. In this way, you can gradually migrate your applications to TypeScript, which improves the writing and quality of the code. Today, it's hard to find a great frontend or backend application without using TypeScript. The language is already a development standard and can be used with any framework.",
	},
	{
		Icon: TbBrandNextjs,
		title: 'NextJS',
		text: 'Next.js is a production-ready framework for React, the most popular JavaScript library today. It allows you to develop high-performance, SEO-friendly websites using Server Side Rendering (SSR) and static page generation.',
	},
	{
		Icon: TbApi,
		title: 'Backend API',
		text: "We will build the backend part of our project using NodeJS and ExpressJS framework. Let's raise the StartUp project completely Backend part from 0. Token, Handling User Cookies, Authorization with Google and Github, and API Secure Side.",
	},
	{
		Icon: GrStripe,
		title: "Payment systems. Visa, Mastercard & Subscription plans",
		text: "StartUp projects include working with payment systems using bank cards and Subscription plans, that is, the user will be able to access our platform as a VIP user worth $20 per month, and every month we will withdraw $20 from his card. And we will take a full look at working with customers, their card services, etc...",
	},
	{
		Icon: FaDev,
		title: 'UI',
		text: "Component library. More than 20 UI components, including portal modals, dropdown menus, sidebars, themed buttons, skeleton loaders, popup windows, lazy images, drawers, avatars, vertical and horizontal stacks, and more. We write our own solutions and test headless libraries. We make all components open and semantic.",
	},
	{
		Icon: MdArchitecture,
		title: 'Architecture',
		text: "Project Architecture. Modules. Decomposition. Weak connection and strong coupling of components. Reuse modules. Real projects.",
	},
	{
		Icon: BiErrorCircle,
		title: 'Errors',
		text: "We will learn how to properly handle errors and implement ErrorBoundary. Let's see how it works in practice.",
	},
	{
		Icon: BiGitPullRequest,
		title: "Work with queries and data",
		text: "During our projects, we send requests to the server using Axios to communicate with Front-End and Back-End, and configure Axios technology ourselves. And of course, for data storage, we will learn how to fully work with the MongoDB database.",
	},
	{
		Icon: BiGrid,
		title: 'Grid system',
		text: "Currently, the layout parts of complex web programs are made using the grid system, we work with you during our projects with web programs with an excellent interface and complex css styles. Suitable for mobiles and tablets, that is, all our projects are responsive.",
	},
	{
		Icon: MdOutlineSettingsInputComponent,
		title: 'Refactoring',
		text: 'At the end of the development, we analyze the received code and try to restore it, analyze the weak points, fix them and understand with concrete examples how to separate and isolate modules in the program.',
	},
	{
		Icon: SiJest,
		title: 'Jest Test',
		text: "From scratch, we set up a test environment for unit gesture tests and component tests using the React Testing Library.",
	},
]