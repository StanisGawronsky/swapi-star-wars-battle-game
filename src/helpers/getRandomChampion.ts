import { ChampionType } from "../types";
import { getRandomElementFromArray } from "./getRandomElementFromArray";

const getRandomChampion = (champions: ChampionType[]) => {
  const playerOne = getRandomElementFromArray(champions);
  const playerTwo = getRandomElementFromArray(champions);
  return [playerOne, playerTwo];
};

export default getRandomChampion;
