import Discover from "../buttons/Discover";
import Social from "../buttons/Social";

import "./Header.scss";

import logo from "../../images/logo.svg";
import background from "../../images/backgrounds/header.svg";

function Header() {
	return (
		<header style={{ backgroundImage: `url(${background})` }}>
			<img src={logo} alt="Logo" />
			<h2 className="title-main">FullStack / DevOps</h2>
			<div className="actions">
				<Discover />
				<div className="socials">
					<Social
						icon="linkedin"
						url="https://twitter.com/noahdigesu"
					/>
					<Social
						icon="twitter"
						url="https://twitter.com/noahdigesu"
					/>
					{/* <Social icon="dribbble" url="https://twitter.com/noahdigesu" /> */}
				</div>
			</div>
		</header>
	);
}

export default Header;
