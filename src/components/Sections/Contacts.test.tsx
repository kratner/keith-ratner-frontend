import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./Contact";

describe("Contact Component", () => {
	test("renders contact section title", () => {
		render(<Contact />);
		const titleElement = screen.getByText("Get in Touch");
		expect(titleElement).toBeInTheDocument();
	});

	test("renders email information", () => {
		render(<Contact />);
		const emailHeading = screen.getByText("Email");
		const emailLink = screen.getByText("keith.ratner@gmail.com");

		expect(emailHeading).toBeInTheDocument();
		expect(emailLink).toBeInTheDocument();
		expect(emailLink).toHaveAttribute("href", "mailto:keith.ratner@gmail.com");
	});

	test("renders phone information", () => {
		render(<Contact />);
		const phoneHeading = screen.getByText("Phone");
		const phoneLink = screen.getByText("650-516-7281");

		expect(phoneHeading).toBeInTheDocument();
		expect(phoneLink).toBeInTheDocument();
		expect(phoneLink).toHaveAttribute("href", "tel:650-516-7281");
	});

	test("renders professional profiles section", () => {
		render(<Contact />);
		const profilesHeading = screen.getByText("Professional Profiles");
		const githubLink = screen.getByText("GitHub");
		const linkedInLink = screen.getByText("LinkedIn");

		expect(profilesHeading).toBeInTheDocument();
		expect(githubLink).toHaveAttribute("href", "https://github.com/kratner");
		expect(linkedInLink).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/keithratner",
		);
	});

	test("external links have correct attributes", () => {
		render(<Contact />);
		const githubLink = screen.getByText("GitHub");
		const linkedInLink = screen.getByText("LinkedIn");

		for (const link of [githubLink, linkedInLink]) {
			expect(link).toHaveAttribute("target", "_blank");
			expect(link).toHaveAttribute("rel", "noopener noreferrer");
		}
	});

	test("renders location information", () => {
		render(<Contact />);
		expect(screen.getByText("Based in Staunton, VA")).toBeInTheDocument();
		expect(
			screen.getByText("Available for remote work and local consulting"),
		).toBeInTheDocument();
	});

	test("contact section has correct id", () => {
		render(<Contact />);
		const contactSection = screen.getByTestId("contact-section");
		expect(contactSection).toHaveAttribute("id", "contact");
	});
});
