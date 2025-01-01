// src/components/Sections/Services.tsx
import type { FC } from "react";

const Services: FC = () => {
	return (
		<section id="services" className="services" data-testid="services-section">
			<div className="services__container">
				<h2 className="services__title">Services</h2>

				<div className="services__grid">
					<div className="services__item">
						<h3>Print Solutions</h3>
						<ul>
							<li>Marketing Materials</li>
							<li>Variable Data Printing</li>
							<li>Complex Documentation</li>
							<li>Wide Format Printing</li>
						</ul>
					</div>

					<div className="services__item">
						<h3>Digital Services</h3>
						<ul>
							<li>Website Development</li>
							<li>UX/UI Design</li>
							<li>Process Automation</li>
							<li>Digital Transformation</li>
						</ul>
					</div>

					<div className="services__item">
						<h3>Technical Expertise</h3>
						<ul>
							<li>Front-end Development</li>
							<li>Data Management</li>
							<li>System Integration</li>
							<li>Workflow Optimization</li>
						</ul>
					</div>

					<div className="services__item">
						<h3>Training & Consulting</h3>
						<ul>
							<li>Adobe Creative Suite</li>
							<li>Digital Marketing</li>
							<li>Business Solutions</li>
							<li>Print Production</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
