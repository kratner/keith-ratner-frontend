import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Services from "./Services";

describe("Services Component", () => {
	test("renders services section title", () => {
		render(<Services />);
		const titleElement = screen.getByText("Services");
		expect(titleElement).toBeInTheDocument();
	});

	test("renders all service categories", () => {
		render(<Services />);
		const categories = [
			"Print Solutions",
			"Digital Services",
			"Technical Expertise",
			"Training & Consulting",
		];

		for (const category of categories) {
			const categoryElement = screen.getByText(category);
			expect(categoryElement).toBeInTheDocument();
		}
	});

	test("renders print solutions items", () => {
		render(<Services />);
		const printItems = [
			"Marketing Materials",
			"Variable Data Printing",
			"Complex Documentation",
			"Wide Format Printing",
		];

		for (const item of printItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("renders digital services items", () => {
		render(<Services />);
		const digitalItems = [
			"Website Development",
			"UX/UI Design",
			"Process Automation",
			"Digital Transformation",
		];

		for (const item of digitalItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("renders technical expertise items", () => {
		render(<Services />);
		const technicalItems = [
			"Front-end Development",
			"Data Management",
			"System Integration",
			"Workflow Optimization",
		];

		for (const item of technicalItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("renders training & consulting items", () => {
		render(<Services />);
		const trainingItems = [
			"Adobe Creative Suite",
			"Digital Marketing",
			"Business Solutions",
			"Print Production",
		];

		for (const item of trainingItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("service section has correct id for navigation", () => {
		render(<Services />);
		const servicesSection = screen.getByTestId("services-section");
		expect(servicesSection).toHaveAttribute("id", "services");
	});
});
