// src/components/Header/Header.tsx
import type { FC } from "react";

const Header: FC = () => {
	// Function to determine the studio URL based on environment
	const getStudioUrl = () => {
		// If in development, use relative path
		if (process.env.NODE_ENV === "development") {
			return "/studio";
		}
		// In production (GitHub Pages), use the actual WordPress URL
		return "https://keithratner.live/studio";
	};

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
								href={getStudioUrl()}
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
