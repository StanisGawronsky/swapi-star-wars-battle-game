import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";
import { championMock, starshipMock } from "~/__mocks__/index";

describe("<Card />", () => {
  it("renders correctly Champion Card", () => {
    const { container } = render(<Card player={championMock} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly Starship Card", () => {
    const { container } = render(<Card player={starshipMock} />);
    expect(container).toMatchSnapshot();
  });
});
