import React from "react";
import { Card } from "~/components/atoms/index";
import { playerTypes } from "~/types/Unions";
import { nanoid } from "nanoid";
import useScene from "./useScene";
import styles from "./styles/styles.module.scss";

interface IProps {
  players: [playerTypes, playerTypes] | [];
  currentAttribute: string;
}
const Scene: React.FC<IProps> = ({ players, currentAttribute }: IProps) => {
  const { result } = useScene({ players, currentAttribute });

  return (
    <div>
      {result && (
        <h1 className={styles.resultHeading}>{`Game result : ${result}`}</h1>
      )}
      <div className={styles.cardContainer}>
        {players?.map((player) => {
          return (
            <Card
              key={nanoid()}
              player={player}
              currentAttribute={currentAttribute}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Scene;
