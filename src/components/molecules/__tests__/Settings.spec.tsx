import React from "react";
import { render } from "@testing-library/react";
import Settings from "../Settings/Settings";

describe("<Settings />", () => {
  it("renders correctly", () => {
    const { container } = render(<Settings />);
    expect(container).toMatchSnapshot();
  });
});
