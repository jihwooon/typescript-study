import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/book body/i);

  expect(headingElement).toBeInTheDocument();

  const loginElement = screen.getByText(/로그인/i);

  expect(loginElement).toBeInTheDocument();

  const signupElement = screen.getByText(/회원가입/i);

  expect(signupElement).toBeInTheDocument();
});
