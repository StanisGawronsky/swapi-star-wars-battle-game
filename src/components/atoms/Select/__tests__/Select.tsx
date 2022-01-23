import React from "react";
import { render } from "@testing-library/react";
import Select from "../Select";
const options = ["1", "2"];
describe("<Select />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Select onChange={jest.fn()} options={options} label="1" />
    );
    expect(container).toMatchSnapshot();
  });
});
