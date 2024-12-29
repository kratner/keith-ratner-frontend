// src/components/Header/Header.test.tsx
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
	test("renders main navigation items", () => {
		render(<Header />);
		expect(screen.getByText("Services")).toBeInTheDocument();
		expect(screen.getByText("Contact")).toBeInTheDocument();
		expect(screen.getByText("Studio")).toBeInTheDocument();
	});
});

// src/components/Sections/Hero.test.tsx
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
	test("renders main content", () => {
		render(<Hero />);
		expect(
			screen.getByText(/Print & Digital Solutions Consultant/i),
		).toBeInTheDocument();
		expect(screen.getByText("View Services")).toBeInTheDocument();
		expect(screen.getByText("Get in Touch")).toBeInTheDocument();
	});
});

// src/components/Sections/Contact.test.tsx
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Component", () => {
	test("renders contact information", () => {
		render(<Contact />);
		expect(screen.getByText("keith.ratner@gmail.com")).toBeInTheDocument();
		expect(screen.getByText("650-516-7281")).toBeInTheDocument();
		expect(screen.getByText("GitHub")).toBeInTheDocument();
		expect(screen.getByText("LinkedIn")).toBeInTheDocument();
	});
});
