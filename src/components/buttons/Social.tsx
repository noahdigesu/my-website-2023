import {Icon} from "@ailibs/feather-react-ts";
import {motion} from "framer-motion";

import "./Social.scss";

interface Props {
    icon: "linkedin" | "twitter" | "dribbble";
    url: string;
}

function Social(props: Props) {
    return (
        <motion.a className="button-social"
                  href={props.url}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            {props.icon == "dribbble" ?
                <svg className="icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2"
                     fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path
                        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg> : <Icon name={props.icon} className="icon"/>}
        </motion.a>
    );
}

export default Social;
