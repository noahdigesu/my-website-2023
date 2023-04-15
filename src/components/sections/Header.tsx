import Discover from "../buttons/Discover";
import Social from "../buttons/Social";

import {motion} from "framer-motion";

import "./Header.scss";

import logo from "../../images/logo.svg";
import background from "../../images/backgrounds/header.svg";

const social = {
    hidden: {
        opacity: 0,
        y: -30,
        display: "inherit"
    },
    visible: {
        opacity: 1,
        y: 0,
        display: "inherit"
    },
}

const fade = {
    hidden: {
        opacity: 0,
        display: "inherit"
    },
    visible: {
        opacity: 1,
        display: "inherit",
        transition: {delay: 1, duration: .8}
    },
}

function Header() {
    return (
        <header style={{backgroundImage: `url(${background})`}}>
            <img src={logo} alt="Logo" style={{height: "10em"}}/>
            <h2 className="title-main">FullStack | DevOps<br />Designer</h2>
            <div className="actions">
                <motion.div initial="hidden"
                            animate="visible"
                            variants={fade}>
                    <Discover/>
                </motion.div>
                <motion.div className="socials"
                            initial="hidden"
                            animate="visible"
                            transition={{staggerChildren: 0.3, delayChildren: 1.6}}>
                    <motion.div variants={social}>
                        <Social
                            icon="linkedin"
                            url="https://linkedin.com/in/noahdigesu"
                        />
                    </motion.div>
                    <motion.div variants={social}>
                        <Social
                            icon="twitter"
                            url="https://twitter.com/noahdigesu"
                        />
                    </motion.div>
                    <motion.div variants={social}>
                        <Social
                            icon="dribbble"
                            url="https://dribbble.com/noahdigesu"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
}

export default Header;
