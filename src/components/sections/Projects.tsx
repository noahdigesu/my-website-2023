import "./Projects.scss";

import Project from "../cards/Project";
import Filter from "../buttons/Filter";

const projects = [
	{
		name: "Smoothey signup",
		year: 2023,
		background_color: "#3D396D",
		image: "smoothey-sign-up",
		theme: "light",
		url: "",
	},
	{
		name: "Testing dashboard",
		year: 2022,
		background_color: "#F4FAFF",
		image: "testing-dashboard",
		theme: "dark",
		url: "",
	},
	{
		name: "Portfolio",
		year: 2021,
		background_color: "#f1d2fb",
		image: "portfolio",
		theme: "dark",
		url: "",
	},
];

function Projects() {
	return (
		<div className="section-projects" id="work">
			<div className="top">
				<h2 className="title">Work</h2>
				<div className="filters">
					<Filter text="Design 🎨" active={true} theme="dark" />
					<Filter text="Code 👨‍💻" active={false} theme="dark" />
					<Filter text="Articles 🗞" active={false} theme="dark" />
				</div>
			</div>

			<div className="projects">
				{projects.map((project) => (
					<Project
						name={project.name}
						year={project.year}
						background_color={project.background_color}
						image={project.image}
						theme={project.theme}
						url={project.url}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;
