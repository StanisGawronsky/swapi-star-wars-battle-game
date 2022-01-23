import React from "react";
import { render } from "@testing-library/react";
import Scene from "../Scene";
describe("<Scene />", () => {
  it("renders correctly", () => {
    const { container } = render(<Scene />);
    expect(container).toMatchSnapshot();
  });
});
