import { Icon } from "@ailibs/feather-react-ts";

import "./Social.scss";

interface Props {
	icon: any;
	url: string;
}

function Social(props: Props) {
	return (
		<a
			className="button-social"
			href={props.url}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon name={props.icon} className="icon" />
		</a>
	);
}

export default Social;
