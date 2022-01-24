import React, { useEffect, useState } from "react";
import { Scene, Settings } from "~/components/molecules";
import getRandomStarship from "~/helpers/getRandomStarship";
import getRandomChampion from "~/helpers/getRandomChampion";
import { ChampionType, StarshipType } from "~/types/index";
import { playerTypes } from "~/types/Unions";
import { useSettings } from "./useSettings";
import styles from "./styles/styles.module.scss";

interface IProps {
  champions: ChampionType[];
  starships: StarshipType[];
}

const Game: React.FC<IProps> = ({ champions, starships }: IProps) => {
  const settings = useSettings();
  const { currentAttribute, currentPlayerType, CHAMPIONS, STARSHIPS } =
    settings;
  const [isGameLoading, setGameLoading] = useState<boolean>(false);
  const [players, setPlayers] = useState<[playerTypes, playerTypes] | []>([]);

  useEffect(() => {
    if (isGameLoading) {
      if (currentPlayerType === CHAMPIONS) {
        const players = getRandomChampion(champions);
        setPlayers(players as [ChampionType, ChampionType]);
      } else if (currentPlayerType === STARSHIPS) {
        const players = getRandomStarship(starships);
        setPlayers(players as [StarshipType, StarshipType]);
      }
      setGameLoading(false);
    }
  }, [isGameLoading]);

  return (
    <div className={styles.gameWrapper}>
      <Settings {...settings} />
      <Scene players={players} currentAttribute={currentAttribute} />
      <button
        className={styles.playButton}
        onClick={() => setGameLoading(true)}
      >
        play
      </button>
    </div>
  );
};

export default Game;
