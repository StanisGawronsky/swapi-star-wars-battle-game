import { StarshipType } from "../types";
import { getRandomElementFromArray } from "./getRandomElementFromArray";

const getRandomStarship = (starships: StarshipType[]) => {
  const playerOne = getRandomElementFromArray(starships);
  const playerTwo = getRandomElementFromArray(starships);
  return [playerOne, playerTwo];
};

export default getRandomStarship;
