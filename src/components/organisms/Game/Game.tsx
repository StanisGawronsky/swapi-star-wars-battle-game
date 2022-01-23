import React from "react";

import { SettingsModel } from "~/components/molecules/SettingsModel";

import { ChampionType, StarshipType } from "~/types/index";

interface IProps {
  props?: {
    champions: ChampionType[];
    starships: StarshipType[];
  };
}
const Game: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <SettingsModel />
      {/* <Settings
        playerTypes={playerTypes}
        availableAttributes={availableAttributes}
        setCurrentAttribute={setCurrentAttribute}
        setCurrentPlayerType={setCurrentPlayerType}
      /> */}
    </div>
  );
};

export default Game;
