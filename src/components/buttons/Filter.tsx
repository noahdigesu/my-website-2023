import { useState } from "react";
import "./Filter.scss";

interface Props {
	text: string;
	active: boolean;
}

function Filter(props: Props) {
	const [isActive, setActive] = useState(props.active);

	return (
		<span className={`filter ${isActive ? "active" : "inactive"}`} onClick={() => setActive(!isActive)}>
			{props.text}
		</span>
	);
}

export default Filter;
