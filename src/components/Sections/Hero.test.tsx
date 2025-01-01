import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

describe("Hero Component", () => {
	beforeEach(() => {
		render(<Hero />);
	});

	test("renders main title", () => {
		const titleElement = screen.getByText(
			"Print & Digital Solutions Consultant",
		);
		expect(titleElement).toBeInTheDocument();
	});

	test("renders subtitle with bridging message", () => {
		const subtitleElement = screen.getByText(
			/Bridging print and digital solutions/i,
		);
		expect(subtitleElement).toBeInTheDocument();
	});

	test("renders experience text", () => {
		const experienceText = screen.getByText(/20 years of experience/i);
		expect(experienceText).toBeInTheDocument();
	});

	test("renders call-to-action buttons", () => {
		const servicesButton = screen.getByRole("link", { name: /view services/i });
		const contactButton = screen.getByRole("link", { name: /get in touch/i });

		expect(servicesButton).toBeInTheDocument();
		expect(contactButton).toBeInTheDocument();
	});

	test("CTA buttons have correct navigation links", () => {
		const servicesButton = screen.getByRole("link", { name: /view services/i });
		const contactButton = screen.getByRole("link", { name: /get in touch/i });

		expect(servicesButton).toHaveAttribute("href", "#services");
		expect(contactButton).toHaveAttribute("href", "#contact");
	});
});
