import './Skills.scss';

import background from '../../images/backgrounds/footer.svg';

import Filter from '../buttons/Filter';
import Skill from '../cards/Skill';

function Skills() {
	return (
		<div
			className="section-skills"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="top">
				<h2 className="title-section">Skills</h2>
				<div className="filters">
					<Filter text="Languages and frameworks 🤖" active={true} />
					<Filter text="Tools and technologies 🧰" active={false} />
					<Filter text="Methodologies 📜" active={false} />
				</div>
			</div>

			<div className="skills">
				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>
				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>
				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>
				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>
				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>

				<Skill
					name="Laravel"
					category="Languages and frameworks"
					type="Web"
					icon="laravel"
				/>
			</div>
		</div>
	);
}

export default Skills;
