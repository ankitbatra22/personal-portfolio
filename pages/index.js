import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Proficiency from "../containers/Proficiency";
const Greetings = dynamic(() => import("../containers/Greetings"));
const Navigation = dynamic(() => import("../components/Navigation"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const Education = dynamic(() => import("../containers/Education"));

import { openSource } from "../portfolio";
import SEO from "../components/SEO";

const keywordsList = [
	"Ankit","Ankit Batra", "ankitbatra22", "Ankit Batra Portfolio", "Ankit Portfolio ", "Ankit Batra ML", "machine learning",
	"full stack", "Software Engineer", "Machine Learning Engineer", "Computer Vision", "Flask",
	"University of Waterloo", "ankitbatra", "pytorch ", "tensorflow", "reactjs ", "opencv", "mechatronics", "waterloo",
]

export default function Home() {
	return (
    <div>
			<SEO
				data={{
					title: "Ankit Batra",
					description:
						"A passionate Mechatronics engineering student @UWaterloo with an interest in Deep Learning, Computer Vision, Backend & Cloud Computing.",
					image: `https://api.github.com/users/${openSource.githubUserName}`,
					url: "",
					keywords: keywordsList,
				}}
			/>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Projects />
      
    </div>
    
	);
}

