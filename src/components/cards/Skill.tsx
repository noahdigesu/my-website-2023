import "./Skill.scss";

interface Props {
	name: string;
	category: string;
	type: string;
	icon: string;
}

function Skill(props: Props) {
	return (
		<div className="skill" data-category={props.category}>
			<img
				src={`/images/skills-logos/${props.icon}.png`}
				alt={`${props.name} icon`}
				className="skill-icon"
			/>
			<span className="skill-name">{props.name}</span>
			<span className="skill-type">{props.type}</span>
		</div>
	);
}

export default Skill;
