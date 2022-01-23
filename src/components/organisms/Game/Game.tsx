import React from "react";
import { ChampionType, StarshipType } from "~/types/index";
interface IProps {
  props: {
    champions: ChampionType[];
    starships: StarshipType[];
  };
}
const Game: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  return <div></div>;
};

export default Game;
