import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ankit Batra",
	title: "Hi I'm Ankit!",
	description:
		"A passionate Mechatronics engineering student @UWaterloo with an interest in Deep Learning, Computer Vision, Backend & Cloud Computing.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "ankitbatra22"
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/ankitbatra22",
	linkedin: "https://www.linkedin.com/in/ankit-batra-/",
	email: "https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Aa9batra%40uwaterloo.ca",
	twitter: "https://twitter.com/ankitbatra22"
};

export const skillsSection = {
	title: "My Skillset",
	subTitle:
		"Some of the technologies I've worked with and am currently working with.",
	skills: [
		emoji(
			"⚡ Full-stack web development using modern frameworks and libraries"
		),
		emoji(
			"⚡ Computer Vision / Deep Learning "
		),
		emoji(
			"⚡ Cloud infrastructure and deployment"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},

		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "Pytorch",
			fontAwesomeClassname: "logos:pytorch",
		},
		{
			skillName: "Tensorflow",
			fontAwesomeClassname: "logos:tensorflow",
		},
		{
			skillName: "FastAPI",
			fontAwesomeClassname: "simple-icons:fastapi",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName:"flask",
			fontAwesomeClassname:"bx:bxl-flask",
		},
		{
			skillName:"PostgreSQL",
			fontAwesomeClassname:"logos:postgresql",
		},
		{
			skillName:"golang",
			fontAwesomeClassname:"grommet-icons:golang",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Programming", 
		progressPercentage: "4", 
	},
	{
		Stack: "Computer Vision",
		progressPercentage: "3",
	},
	{
		Stack: "Web Development",
		progressPercentage: "2",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Waterloo",
		subHeader: "Mechatronics Engineering",
		duration: "Sept 2020 - May 2025",
		desc: "Relevent Courses: Data Structures and Algorithms, Digital Computation, Microprocessors and Digital Logic, Calculus",
	},
];

export const experience = [
	{
		role: "Software Developer Intern, Computer Vision",
		company: "Miovision",
		companylogo: "/img/icons/common/miovision.png",
		date: "Jan 2022 - Present",
		desc: "Computer Vision Team",
		descBullets: [
			"Tools Used: Python, TypeScript, MLFlow, Tensorflow, Keras, AWS, Docker, Git"
		],
	},
	{
		role: "Machine Learning Software Engineer Intern",
		company: "SAP",
		companylogo: "/img/icons/common/sap.png",
		date: "May 2021 - Sept 2021",
		desc: "Product Intelligence Team",
		descBullets: [
			"Tools Used: Python, PostgreSQL, Tensorflow, Flask, PyTorch, Azure, Docker, Git"
		],
	},
];

export const projects = [
	{
		name: "Smart Dance",
		desc: "Hack the North 2021 Winner! Created a web app that uses pose estimation to guide users on how to perform popular dances by overlaying the movements on their body through their webcam.",
		link: "https://devpost.com/software/smart-dance?ref_content=user-portfolio&ref_feature=in_progress",
		github: "https://github.com/ankitbatra22/Smart-Dance",
	},
	{
		name: "Gesture-Mouse",
		desc: "Developed a chrome extension that uses a 3D convolutional neural network to classify hand gestures from the built-in webcam of a computer and interface with a website.",
		github: "https://github.com/ankitbatra22/Gesture-Recognizer",
		link: "https://github.com/ankitbatra22/Gesture_Recognizer",
	},
	{
		name: "MyType",
		desc: "Built a full-stack web application that tracks a user's typing patterns and gives them a customized typing test to improve typing speeds. Made at Hack The North 2020.",
		link: "https://mytypee.herokuapp.com/#",
		github: "https://github.com/ankitbatra22/mytype"
	},
	{
		name: "Busy-Bee-Bot",
		desc: "Created a Discord Bot used by over 10000 users, that performs various commands, chat moderation, and has a currency system.",
		link: "https://discord.gg/eBd9YeZtb9",
		github: "https://github.com/ankitbatra22/Busy-Bee-Bot"
	},
];

