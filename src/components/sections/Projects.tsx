import "./Projects.scss";

import Project from "../cards/Project";
import Filter from "../buttons/Filter";

function Projects() {
	return (
		<div className="section-projects" id="work">
			<div className="top">
				<h2 className="title-section">Work</h2>
				<div className="filters">
					<Filter text="Design 🎨" active={true} theme="dark" />
					<Filter text="Code 👨‍💻" active={false} theme="dark" />
					<Filter text="Articles 🗞" active={false} theme="dark" />
				</div>
			</div>

			<div className="projects">
				<Project
					name="Smoothey signup"
					year={2023}
					background_color="#3D396D"
					image="smoothey_sign_up"
					scheme="light"
					url=""
				/>
				<Project
					name="Testing dashboard"
					year={2022}
					background_color="#F4FAFF"
					image="testing_dashboard"
					scheme="dark"
					url=""
				/>
				<Project
					name="Portfolio"
					year={2021}
					background_color="#f1d2fb"
					image="portfolio"
					scheme="dark"
					url=""
				/>
			</div>
		</div>
	);
}

export default Projects;
