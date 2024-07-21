import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/book body/i);

  expect(headingElement).toBeInTheDocument();

  const titleElement = screen.getByText(/제목 테스트/i);

  expect(titleElement).toBeInTheDocument();
});
