import {Icon} from "@ailibs/feather-react-ts";

import "./Project.scss";

interface Props {
    name: string;
    year: number;
    background_color: string;
    accent: string;
    image: string;
    theme: string;
    url: string;
}

function Project(props: Props) {
    return (
        <div
            className={`card ${props.theme}`}
            style={{backgroundColor: props.background_color}}
        >
            <div className="card-top">
                <div className="card-info">
                    <h3 className="card-title">{props.name}</h3>
                    <span className="card-year" style={{backgroundColor: props.accent}}>{props.year}</span>
                </div>
                <a href={props.url} className="card-link" target="_blank"
                   style={{display: props.url ? "flex" : "none"}}>
                    <Icon name="arrow-up-right" className="icon"/>
                </a>
            </div>
            <div
                style={{
                    backgroundImage: `url(/images/projects/${props.image}.png)`,
                }}
                className="card-image"
            />
        </div>
    );
}

export default Project;
