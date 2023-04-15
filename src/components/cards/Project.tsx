import {Icon} from "@ailibs/feather-react-ts";

import "./Project.scss";

import {Theme} from "../../types";

interface Props {
    name: string;
    year: number;
    background_color: string;
    accent: string;
    image: string;
    theme: Theme;
    url: string;
}

function Project(props: Props) {
    return (
        <div
            className={`card ${props.theme}`}
            style={{backgroundColor: props.background_color.toString()}}
        >
            <div className="card-top">
                <div className="card-info">
                    <h3 className="card-title">{props.name}</h3>
                    <span className="card-year" style={{backgroundColor: props.accent.toString()}}>{props.year}</span>
                </div>
                {props.url ?
                    <a href={props.url} className="card-link" target="_blank">
                        <Icon name="arrow-up-right" className="icon"/>
                    </a> : ""
                }
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
