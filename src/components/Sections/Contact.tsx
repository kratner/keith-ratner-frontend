import type { FC } from "react";

const Contact: FC = () => {
	return (
		<section className="contact" id="contact" data-testid="contact-section">
			<div className="contact__container">
				<h2 className="contact__title">Get in Touch</h2>
				<div className="contact__content">
					<div className="contact__methods">
						<div className="contact__method">
							<h3>Email</h3>
							<a href="mailto:keith.ratner@gmail.com">keith.ratner@gmail.com</a>
						</div>
						<div className="contact__method">
							<h3>Phone</h3>
							<a href="tel:650-516-7281">650-516-7281</a>
						</div>
					</div>

					<div className="contact__profiles">
						<h3>Professional Profiles</h3>
						<div className="contact__links">
							<a
								href="https://github.com/kratner"
								className="contact__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/keithratner"
								className="contact__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</div>
					</div>

					<div className="contact__location">
						<p>Based in Staunton, VA</p>
						<p>Available for remote work and local consulting</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
