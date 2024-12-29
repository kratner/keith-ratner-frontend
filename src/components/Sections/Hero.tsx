// src/components/Sections/Hero.tsx
import type { FC } from "react";

const Hero: FC = () => {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<h1 className="hero__title">Print & Digital Solutions Consultant</h1>
					<p className="hero__subtitle">
						Bridging print and digital solutions with over 20 years of
						experience in UX Design, Software Development, and Creative
						Management.
					</p>
					<div className="hero__actions">
						<a href="#services" className="hero__cta-primary">
							View Services
						</a>
						<a href="#contact" className="hero__cta-secondary">
							Get in Touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
