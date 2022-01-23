import React from "react";
import { Select } from "~/components/atoms";

const Settings = () => {
  return (
    <div>
      <Select options={["1", "2"]} label={"123"} onChange={jest.fn()} />
      <Select options={["1", "2"]} label={"123"} onChange={jest.fn()} />
    </div>
  );
};

export default Settings;
