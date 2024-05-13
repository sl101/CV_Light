import { meta, shopify, medcol, tesla } from "../assets/images";
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript
} from "../assets/icons";

export const skills = [
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	}
];

export const experiences = [
	{
		title: "Project manager",
		company_name: "Vienna Insurance Group",
		icon: "https://www.usg.ua/_next/static/media/logo_main.5d648417.svg",
		iconBg: "#D1F5D9",
		date: "Sep 2008 - Oct 2019",
		points: [
			"Developed a personal web application for an insurance agent.",
			"The goal was to attract new customers to sell the company's insurance products.",
			"In order to promote, developed a proposal for the implementation of a mobile application that represents the services and products of the company.",
			"Led a team of sales representatives and successfully met sales targets for various insurance products.",
			"Led a team of sales representatives and successfully met sales targets for various insurance products.",
		],
	},
	{
		title: "Frontend mentor",
		company_name: "Tel-Ran",
		icon: "https://static.tildacdn.com/tild3838-3836-4632-b663-363731353933/Group_2136.png",
		iconBg: "#d9e7fc",
		date: "Sep 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React.js Developer",
		company_name: "Medcol",
		icon: medcol,
		iconBg: "#cddce6",
		date: "Oct 2023 - Dec 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Digital enterprise solutions",
		icon: "https://lh3.googleusercontent.com/aJgjSWxJ9AHqqvmChgU24XHSujj3byIWvhjuQsaWBPY35P5E1_BMWpb5pT3UIuaZxp7LbM0-zUehzKeJBZJRoZPIpw=s60",
		iconBg: "#D3E8F8",
		date: "Jan 2021 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/sl101',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/viacheslav-zhevaha/',
	}
];

export const projects = [
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Amazon Price Tracker',
		description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
		link: 'https://github.com/adrianhajdin/pricewise',
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Full Stack Threads Clone',
		description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: 'https://github.com/adrianhajdin/threads',
	},
	{
		iconUrl: car,
		theme: 'btn-back-blue',
		name: 'Car Finding App',
		description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
		link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'Full Stack Instagram Clone',
		description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
		link: 'https://github.com/adrianhajdin/social_media_app',
	},
	{
		iconUrl: estate,
		theme: 'btn-back-black',
		name: 'Real-Estate Application',
		description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
		link: 'https://github.com/adrianhajdin/projects_realestate',
	},
	{
		iconUrl: summiz,
		theme: 'btn-back-yellow',
		name: 'AI Summarizer Application',
		description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
		link: 'https://github.com/adrianhajdin/project_ai_summarizer',
	}
];