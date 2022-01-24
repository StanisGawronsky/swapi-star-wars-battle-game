import { useEffect, useState } from "react";
import { getAttributeWinner } from "~/helpers/getAttributeWinner";
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
