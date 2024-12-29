// src/App.tsx
import type { FC } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Sections/Hero";
import Services from "./components/Sections/Services";
import Contact from "./components/Sections/Contact";
import "./styles/main.scss";

const App: FC = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<Services />
				<Contact />
			</main>
		</div>
	);
};

export default App;
