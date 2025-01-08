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
			"Mac/PC Support",
			"Tech Services",
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

	test("renders mac/pc support items", () => {
		render(<Services />);
		const computerItems = [
			"Hardware Diagnostics",
			"Software Troubleshooting",
			"System Optimization",
			"Data Recovery",
		];

		for (const item of computerItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("renders tech services items", () => {
		render(<Services />);
		const techItems = [
			"Network Setup",
			"Migration Assistance",
			"Security Configuration",
			"Remote Support",
		];

		for (const item of techItems) {
			const itemElement = screen.getByText(item);
			expect(itemElement).toBeInTheDocument();
		}
	});

	test("service section has correct id", () => {
		render(<Services />);
		const servicesSection = screen.getByTestId("services-section");
		expect(servicesSection).toHaveAttribute("id", "services");
	});
});
