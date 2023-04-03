import {Icon} from "@ailibs/feather-react-ts";
import {motion} from "framer-motion";

import "./Social.scss";

interface Props {
    icon: any;
    url: string;
}

function Social(props: Props) {
    return (
        <motion.a whileHover={{scale: 1.1}}
                  whileTap={{scale: 1}}
                  className="button-social"
                  href={props.url}
                  target="_blank"
                  rel="noopener noreferrer"
        >
            <Icon name={props.icon} className="icon"/>
        </motion.a>
    );
}

export default Social;
