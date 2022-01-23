import React from "react";
import { render } from "@testing-library/react";
import SettingsModel from "../SettingsModel";
describe("<SettingsModel />", () => {
  it("renders correctly", () => {
    const { container } = render(<SettingsModel />);
    expect(container).toMatchSnapshot();
  });
});
