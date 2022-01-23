import React from "react";
import { Settings } from "../Settings";
import { useSettings } from "./useSettings";

const SettingsModel = () => {
  const props = useSettings();
  return <Settings {...props} />;
};

export default SettingsModel;
