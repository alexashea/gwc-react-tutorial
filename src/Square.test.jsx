import { render } from "@testing-library/react";
import { Square } from "./Square";

describe("Square", () => {
  it("is a button (l01, l02)", () => {
    const { getByRole } = render(<Square />);

    expect(getByRole("button")).toBeVisible();
  });
  it("displays the value passed to it (l01, l02)", () => {
    const { getByText } = render(<Square value={"some value"} />);

    expect(getByText("some value")).toBeVisible();
  });
  it("some lesson 2 test (l02)", () => {
    const { getAllByTitle } = render(<Square />);

    expect(getAllByTitle("Square")).toHaveLength(9);
  });
});
