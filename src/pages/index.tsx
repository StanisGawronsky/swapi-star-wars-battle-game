import type { GetStaticProps } from "next";
import React from "react";
import { Game } from "~/components/organisms/Index";
import { ChampionType, StarshipType } from "~/types/index";
import { getChampions, getStarships } from "../api";

interface IProps {
  champions: ChampionType[];
  starships: StarshipType[];
}

const Home: React.FC<IProps> = ({ champions, starships }: IProps) => {
  return <Game champions={champions} starships={starships} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const champions = await getChampions();
  const starships = await getStarships();

  return {
    props: {
      champions,
      starships,
    },
  };
};
export default Home;
