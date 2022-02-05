import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Proficiency from "../containers/Proficiency";
const Greetings = dynamic(() => import("../containers/Greetings"));
const Navigation = dynamic(() => import("../components/Navigation"));
const Skills = dynamic(() => import("../containers/Skills"));

export default function Home() {
	return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
    </div>
    
	);
}

