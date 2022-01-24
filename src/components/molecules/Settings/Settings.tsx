import React from "react";
import { Select } from "~/components/atoms";
import styles from "./styles/styles.module.scss";

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
    <div className={styles.settingsWrapper}>
      <Select
        options={playerTypes}
        label={"Choose your player type"}
        onChange={setCurrentPlayerType}
      />

      <Select
        options={availableAttributes}
        label={"Choose your attribute"}
        onChange={setCurrentAttribute}
      />
    </div>
  );
};

export default Settings;
