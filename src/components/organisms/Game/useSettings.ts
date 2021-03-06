import { useEffect, useState } from "react";
interface ISettings {
  currentAttribute: string;
  currentPlayerType: string;
  playerTypes: string[];
  availableAttributes: string[];
  setCurrentPlayerType: (player: string) => void;
  setCurrentAttribute: (attribute: string) => void;
  CHAMPIONS: string;
  STARSHIPS: string;
  CHAMPION_ATTRIBUTES: string[];
  STARSHIP_ATTRIBUTES: string[];
}
const CHAMPIONS = "champions";
const STARSHIPS = "starships";
const CHAMPION_ATTRIBUTES: string[] = ["height", "mass", "birth_year"];
const STARSHIP_ATTRIBUTES: string[] = [
  "cost_in_credits",
  "length",
  "max_atmosphering_speed",
  "crew",
  "passengers",
  "cargo_capacity",
  "consumables",
  "hyperdrive_rating",
  "MGLT",
];
export const useSettings = (): ISettings => {
  const [currentAttribute, setCurrentAttribute] = useState<string>(
    CHAMPION_ATTRIBUTES[0]
  );
  const [availableAttributes, setAvailableAttributes] =
    useState<Array<string>>(CHAMPION_ATTRIBUTES);
  const [currentPlayerType, setCurrentPlayerType] = useState(CHAMPIONS);
  const playerTypes = [CHAMPIONS, STARSHIPS];

  useEffect(() => {
    if (currentPlayerType === CHAMPIONS) {
      setAvailableAttributes(CHAMPION_ATTRIBUTES);
      setCurrentAttribute(CHAMPION_ATTRIBUTES[0]);
    }

    if (currentPlayerType === STARSHIPS) {
      setAvailableAttributes(STARSHIP_ATTRIBUTES);
      setCurrentAttribute(STARSHIP_ATTRIBUTES[0]);
    }
  }, [currentPlayerType]);

  return {
    currentAttribute,
    setCurrentAttribute,
    currentPlayerType,
    setCurrentPlayerType,
    playerTypes,
    availableAttributes,
    CHAMPIONS,
    STARSHIPS,
    CHAMPION_ATTRIBUTES,
    STARSHIP_ATTRIBUTES,
  };
};
