import "./Skill.scss";

import bash from "../../images/skills-logos/bash.png";
import c from "../../images/skills-logos/c.png";
import cpp from "../../images/skills-logos/cpp.png";
import django from "../../images/skills-logos/django.png";
import java from "../../images/skills-logos/java.png";
import jest from "../../images/skills-logos/jest.png";
import js from "../../images/skills-logos/js.png";
import kotlin from "../../images/skills-logos/kotlin.png";
import laravel from "../../images/skills-logos/laravel.png";
import node from "../../images/skills-logos/node.png";
import none from "../../images/skills-logos/none.png";
import php from "../../images/skills-logos/php.png";
import python from "../../images/skills-logos/python.png";
import sass from "../../images/skills-logos/sass.png";
import spring from "../../images/skills-logos/spring.png";
import webdriverio from "../../images/skills-logos/webdriverio.png";

interface Props {
	name: string;
	category: "l-a-f" | "t-a-t" | "m";
	type: "Web" | "App" | "Other";
	icon: string;
}

function getIcon(icon: string) {
	switch (icon) {
		case "bash":
			return bash;
		case "c":
			return c;
		case "cpp":
			return cpp;
		case "django":
			return django;
		case "java":
			return java;
		case "jest":
			return jest;
		case "js":
			return js;
		case "kotlin":
			return kotlin;
		case "laravel":
			return laravel;
		case "node":
			return node;
		case "none":
			return none;
		case "php":
			return php;
		case "python":
			return python;
		case "sass":
			return sass;
		case "spring":
			return spring;
		case "webdriverio":
			return webdriverio;
	}
}

function Skill(props: Props) {
	return (
		<div className="skill" data-category={props.category}>
			<img
				src={getIcon(props.icon)}
				alt={`${props.name} icon`}
				className="skill-icon"
			/>
			<span className="skill-name">{props.name}</span>
			<span className="skill-type">{props.type}</span>
		</div>
	);
}

export default Skill;
