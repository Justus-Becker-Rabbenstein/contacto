import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("checks if heading one displays login page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Login",
    });

    expect(heading).toBeInTheDocument();
  });
});
