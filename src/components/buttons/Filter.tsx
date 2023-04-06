import {useState} from "react";
import "./Filter.scss";

interface Props {
    text: string;
    active: boolean;
    theme: "light" | "dark";
}

function Filter(props: Props) {
    const [isActive, setActive] = useState(props.active);

    return (
        <span className={`filter ${props.active ? "active" : "inactive"} ${props.theme}`}
              onClick={() => setActive(!props.active)}>
            {props.text}
		</span>
    );
}

export default Filter;
