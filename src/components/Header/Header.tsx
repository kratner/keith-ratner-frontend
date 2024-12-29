// src/components/Header/Header.tsx
import type { FC } from "react";

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
							<a href="/studio">Studio</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
