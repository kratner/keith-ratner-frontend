import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
	test("renders main heading", () => {
		render(<Header />);
		const headingElement = screen.getByText("Keith Ratner");
		expect(headingElement).toBeInTheDocument();
	});

	test("renders navigation links", () => {
		render(<Header />);
		const navLinks = ["Services", "Contact", "Studio"];
		for (const linkText of navLinks) {
			const link = screen.getByText(linkText);
			expect(link).toBeInTheDocument();
		}
	});

	test("Studio link points to WordPress site", () => {
		render(<Header />);
		const studioLink = screen.getByText("Studio") as HTMLAnchorElement;
		expect(studioLink.href).toBe("https://keithratner.live/studio");
		expect(studioLink.target).toBe("_blank");
		expect(studioLink.rel).toBe("noopener noreferrer");
	});

	test("internal links use hash navigation", () => {
		render(<Header />);
		const servicesLink = screen.getByText("Services") as HTMLAnchorElement;
		const contactLink = screen.getByText("Contact") as HTMLAnchorElement;

		expect(servicesLink.href).toContain("#services");
		expect(contactLink.href).toContain("#contact");
	});
});
