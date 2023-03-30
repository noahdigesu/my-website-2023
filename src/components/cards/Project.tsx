import { Icon } from "@ailibs/feather-react-ts";

import smoothey_sign_up from "../../images/projects/smoothey-sign-up.png";
import testing_dashboard from "../../images/projects/testing_dashboard.png";
import portfolio from "../../images/projects/portfolio.png";

import "./Project.scss";

interface Props {
	name: string;
	year: number;
	background_color: string;
	image: string;
	scheme: "dark" | "light";
	url: string;
}

function getImage(image: string) {
    switch (image) {
		case "smoothey_sign_up":
			return smoothey_sign_up;
		case "testing_dashboard":
			return testing_dashboard;
		case "portfolio":
			return portfolio;
		default:
			return smoothey_sign_up;
	}
}

function Project(props: Props) {
	return (
		<div
			className={`card ${props.scheme}`}
			style={{ backgroundColor: props.background_color }}
		>
			<div className="card-top">
				<div className="card-info">
					<h3 className="card-title">{props.name}</h3>
					<span className="card-year">{props.year}</span>
				</div>

				<a href={props.url} className="card-link">
					<Icon name="arrow-up-right" className="icon" />
				</a>
			</div>
			<div
				style={{ backgroundImage: `url(${getImage(props.image)})` }}
				className="card-image"
			/>
		</div>
	);
}

export default Project;
