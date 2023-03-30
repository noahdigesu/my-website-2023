import './Skill.scss';

interface Props {
	name: string;
	category:
		| "Languages and frameworks"
		| "Tools and technologies"
		| "Methodologies";
	type: "Web" | "App" | "Other";
    icon: string;
}

function Skill(props: Props) {
    return <></>;
}

export default Skill;