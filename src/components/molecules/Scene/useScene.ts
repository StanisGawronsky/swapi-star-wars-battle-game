import { useEffect, useState } from "react";
import { playerTypes } from "~/types/Unions";
interface IProps {
  players: playerTypes[] | [];
  currentAttribute: string;
}
interface IUseScene {
  result: number | string | null;
}

const useScene = ({ players, currentAttribute }: IProps): IUseScene => {
  const [result, setResult] = useState<number | string | null>(null);

  const getAttributeWinner = (
    players: playerTypes[] | [],
    attribute: string
  ) => {
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

  useEffect(() => {
    if (players && typeof players[0] !== "undefined") {
      const result = getAttributeWinner(players, currentAttribute);
      if (result) {
        setResult(result);
      }
    }
  }, [players]);

  return { result };
};

export default useScene;
