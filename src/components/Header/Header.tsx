// src/components/Header/Header.tsx
import type { FC } from "react";
import config from "../../config";

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<h1>Keith Ratner</h1>
				</div>
				<nav className="header__nav">
					<ul>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a
								href={config.studioUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Studio
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
