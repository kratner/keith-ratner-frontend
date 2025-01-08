import type { FC } from "react";

const Services: FC = () => {
	return (
		<section className="services" id="services" data-testid="services-section">
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
						<h3>Mac/PC Support</h3>
						<ul>
							<li>Hardware Diagnostics</li>
							<li>Software Troubleshooting</li>
							<li>System Optimization</li>
							<li>Data Recovery</li>
						</ul>
					</div>

					<div className="services__item">
						<h3>Tech Services</h3>
						<ul>
							<li>Network Setup</li>
							<li>Migration Assistance</li>
							<li>Security Configuration</li>
							<li>Remote Support</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
