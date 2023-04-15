import "./Skill.scss";

import {ProjectType} from "../../types";

interface Props {
    name: string;
    type: ProjectType;
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
