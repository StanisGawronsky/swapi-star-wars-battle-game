import React from "react";
import { Select } from "~/components/atoms";

interface IProps {
  playerTypes: string[];
  availableAttributes: string[];
  setCurrentAttribute: (player: string) => void;
  setCurrentPlayerType: (attribute: string) => void;
}
const Settings: React.FC<IProps> = ({
  playerTypes,
  availableAttributes,
  setCurrentAttribute,
  setCurrentPlayerType,
}: IProps) => {
  return (
    <div>
      <Select
        options={playerTypes}
        label={"Chose your player type"}
        onChange={setCurrentPlayerType}
      />
      <Select
        options={availableAttributes}
        label={"Chose your attribute"}
        onChange={setCurrentAttribute}
      />
    </div>
  );
};

export default Settings;
