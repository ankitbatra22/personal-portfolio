import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {Link} from 'react-scroll';
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
  Label
} from "reactstrap";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		headroom.init();
	});

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main">

					<Container>
						<NavbarBrand href="/" className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand>
						
            <button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global">
							<span className="navbar-toggler-icon" />
						</button>

						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar>

								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Email"
										className="nav-link-icon"
										target="_blank">
											<Link to = "skills">
                      <label style={{fontFamily: 'Monaco', fontSize: 17}}><b>Skills</b></label>
										<span className="nav-link-inner--text d-lg-none ml-2">
										</span>
										</Link>
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Twitter"
										className="nav-link-icon"
										target="_blank">
											<Link to="education">	
                      <label style={{fontFamily: 'Monaco', fontSize: 17}}><b>Education</b></label>
										<span className="nav-link-inner--text d-lg-none ml-2">
										</span>
									</Link>
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Github"
										className="nav-link-icon"
										target="_blank">
                      <Link to="experience">
                        <label style={{fontFamily: 'Monaco', fontSize: 17}}><b>Experience</b></label>
										<span className="nav-link-inner--text d-lg-none ml-2">
										</span>
                    </Link>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Linkedin"
										className="nav-link-icon"
										target="_blank">
                      <Link to="projects">
                      <label style={{fontFamily: 'Monaco', fontSize: 17}}><b>Projects</b></label>
										<span className="nav-link-inner--text d-lg-none ml-2">
										</span>
                    </Link>
									</NavLink>
								</NavItem>
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;