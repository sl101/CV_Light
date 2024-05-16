import { medcol } from "../assets/images";
import {
	mountains,
	//car,
	contact,
	css,
	photographer,
	//express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	//motion,
	//mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	//summiz,
	tailwindcss,
	сosmetics,
	commerce,
	masks,
	icecream,
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
		iconUrl: сosmetics,
		theme: 'btn-back-pink',
		name: 'Online shop cosmetics for men',
		description: 'Accessible, responsive application using various adaptive layout technologies, flex and grid layouts, css animations, sliders. Vanila javascript is used.',
		link: 'https://sl101.github.io/BarberShop/app/index.html',
	},
	{
		iconUrl: photographer, 
		theme: 'btn-back-black',
		name: 'Personal website of a professional photographer.',
		description: 'Developed a landing page for a professional photographer using HTML, CSS, and JavaScript. Integrated responsive design, high-resolution image gallery, and a feedback form for client convenience.',
		link: 'https://sl101.github.io/Photographer-site',
	},
	{
		iconUrl: snapgram,
		theme: 'btn-back-green',
		name: 'Online store selling construction tools and equipment',
		description: 'Fully functional client-server application with Python backend, MongoDB database in Docker, and feature-rich client-side using REACT, Redux toolkit, and other related technologies, including comprehensive buyer authentication and authorization.',
		link: 'https://sergeysev.github.io/Online_Store',
	},
	{
		iconUrl: mountains,
		theme: 'btn-back-blue',
		name: 'Mountain Adventures',
		description: 'In the development of the "Mountain Adventures" landing page prototype, I focused on an appealing design, smooth navigation, and interactive elements. Utilizing HTML, CSS, and JavaScript, I created a responsive interface, integrated visual elements highlighting the beauty of mountain regions, and ensured user-friendly interaction with the proposed tourist routes.',
		link: 'https://sl101.github.io/Ascents-site',
	},
	{
		iconUrl: commerce,
		theme: 'btn-back-yellow',
		name: 'E-commerce App',
		description: 'Developed a prototype for an e-commerce project, incorporating HTML, CSS, and JS. Implemented responsive design and functionality, including interactive elements, dynamic content updates, ensuring user-friendly interface.',
		link: 'https://sl101.github.io/FoxMinded_HTML-CSS/task_8',
	},
	{
		iconUrl: masks,
		theme: 'btn-back-yellow',
		name: 'Handmade masks',
		description: 'Development of a prototype for an adaptive page, utilizing flexible grid layouts, CSS animations, and sliders to deliver an interactive and stylish interface. Implemented vanilla JavaScript for optimal performance.',
		link: 'https://sl101.github.io/Mascs-site',
	},
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Accounting services portal',
		description: 'Developed the frontend for an accounting services portal, including an intuitive website header, enhanced navigation, and adaptive design for optimal interaction across various devices.',
		link: 'https://buhsvit.com.ua/pro-nas',
	},
	{
		iconUrl: icecream,
		theme: 'btn-back-yellow',
		name: 'Ice cream "Polar"',
		description: 'Development of a landing page prototype for ice cream sales. Utilizing flexible grid layouts, CSS animations to create an attractive and interactive interface. Implementation of vanilla JavaScript for optimal performance. Design adheres to professional standards, ensuring an outstanding user experience by highlighting the uniqueness of each ice cream flavor.',
		link: 'https://sl101.github.io/Ice-Cream',
	},
];