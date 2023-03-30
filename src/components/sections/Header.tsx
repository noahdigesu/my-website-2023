import Discover from "../buttons/Discover";

import "./Header.scss";

import logo from "../../images/logo.svg";
import background from "../../images/backgrounds/header.svg";

function Header() {
	return (
		<header style={{ backgroundImage: `url(${background})` }}>
			<img src={logo} alt="Logo" />
			<h2>FullStack / DevOps</h2>
            <Discover />
		</header>
	);
}

export default Header;
