import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Greetings = dynamic(() => import("../containers/Greetings"));
const Navigation = dynamic(() => import("../components/Navigation"));

export default function Home() {
	return (
    <div>
      <Navigation />
      <Greetings />
    </div>
    
	);
}

