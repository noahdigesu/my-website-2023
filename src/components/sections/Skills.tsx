import "./Skills.scss";

import background from "../../images/backgrounds/footer.svg";

import Filter from "../buttons/Filter";
import Skill from "../cards/Skill";

function Skills() {
	return (
		<div
			className="section-skills"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="top">
				<h2 className="title-section">Skills</h2>
				<div className="filters">
					<Filter
						text="Languages and frameworks 🤖"
						active={true}
						theme="light"
					/>
					<Filter
						text="Tools and technologies 🧰"
						active={false}
						theme="light"
					/>
					<Filter
						text="Methodologies 📜"
						active={false}
						theme="light"
					/>
				</div>
			</div>

			<div className="skills">
				<Skill
					name="Laravel"
					category="l-a-f"
					type="Web"
					icon="laravel"
				/>
				<Skill
					name="JavaScript"
					category="l-a-f"
					type="Web"
					icon="js"
				/>
				<Skill name="SASS" category="l-a-f" type="Web" icon="sass" />
				<Skill name="SQL" category="l-a-f" type="Web" icon="none" />
				<Skill name="PHP" category="l-a-f" type="Web" icon="php" />
				<Skill
					name="Spring"
					category="l-a-f"
					type="Web"
					icon="spring"
				/>
				<Skill
					name="Django"
					category="l-a-f"
					type="Web"
					icon="django"
				/>
				<Skill name="Node.js" category="l-a-f" type="Web" icon="node" />
				<Skill
					name="REST APIs"
					category="l-a-f"
					type="Web"
					icon="none"
				/>
				<Skill name="Jest" category="l-a-f" type="Web" icon="jest" />
				<Skill
					name="WebdriverIO"
					category="l-a-f"
					type="Web"
					icon="webdriverio"
				/>
				<Skill
					name="Kotlin"
					category="l-a-f"
					type="Web"
					icon="kotlin"
				/>
				<Skill name="Java" category="l-a-f" type="Web" icon="java" />
				<Skill name="Bash" category="l-a-f" type="Web" icon="bash" />
				<Skill name="C++" category="l-a-f" type="Web" icon="cpp" />
				<Skill name="C" category="l-a-f" type="Web" icon="c" />
				<Skill
					name="Python"
					category="l-a-f"
					type="Web"
					icon="python"
				/>
			</div>
		</div>
	);
}

export default Skills;
