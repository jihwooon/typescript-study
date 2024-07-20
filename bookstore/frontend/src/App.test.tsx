import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/book body/i);

  expect(headingElement).toBeInTheDocument();

  const countElement = screen.getByText("count: 10,000");

  expect(countElement).toBeInTheDocument();
});
