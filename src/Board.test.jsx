import { render } from "@testing-library/react";
import { Board } from "./Board";

describe("Board", () => {
  it("renders nine Squares (l01, l02)", () => {
    const { getAllByTestId } = render(<Board />);

    expect(getAllByTestId("square")).toHaveLength(9);
  });
  it("renders a status (l01, l02)", () => {
    const { getByTestId } = render(<Board />);

    expect(getByTestId("status")).toBeVisible();
  });
  it("passes the values 0-8 to its squares (l01)", () => {
    const { container } = render(<Board />);

    container.querySelectorAll(".square").forEach((square, i) => {
      expect(square).toHaveTextContent(i);
    });
  })
  it("some lesson 2 test (l02)", () => {
    const { getAllByTitle } = render(<Board />);

    expect(getAllByTitle("Square")).toHaveLength(9);
  });
});
