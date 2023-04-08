import "./Skill.scss";

interface Props {
    name: string;
    type: string;
    icon: string;
}

function Skill(props: Props) {
    return (
        <div className="skill">
            <div
                className="skill-icon"
                style={{backgroundImage: `url(/images/skills-logos/${props.icon}.png)`}}
            />
            <span className="skill-name">{props.name}</span>
            <span className="skill-type">{props.type}</span>
        </div>
    );
}

export default Skill;
