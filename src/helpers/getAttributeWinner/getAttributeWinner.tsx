import { playerTypes } from "~/types/Unions";

const getAttributeWinner = (players: playerTypes[] | [], attribute: string) => {
  if (players) {
    const values = players?.map((player: playerTypes) => {
      return player[attribute as keyof playerTypes];
    });

    if (values[0] > values[1]) {
      return "player 1";
    } else if (values[0] < values[1]) {
      return "player 2";
    } else if (values[0] === values[1] && typeof values[0] !== "string") {
      return "remis";
    } else {
      return "unknown";
    }
  }
};

export default getAttributeWinner;
