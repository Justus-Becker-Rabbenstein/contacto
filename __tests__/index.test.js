import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      pathname: "",
      // ... whatever else you you call on `router`
    };
  },
}));

describe("Home", () => {
  it("checks if heading one displays login page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Login",
    });

    expect(heading).toBeInTheDocument();
  });
});
