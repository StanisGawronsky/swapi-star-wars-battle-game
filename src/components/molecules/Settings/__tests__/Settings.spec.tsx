import { render } from "@testing-library/react";
import React from "react";
import Settings from "../Settings";

describe("<Settings />", () => {
  it("renders correctly", () => {
    const { container } = render(<Settings />);
    expect(container).toMatchSnapshot();
  });
});
