import React from "react";
import { render } from "@testing-library/react";
import Game from "../Game";

describe("<Game />", () => {
  it("renders correctly", () => {
    const { container } = render(<Game />);
    expect(container).toMatchSnapshot();
  });
});
