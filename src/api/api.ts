import axios from "axios";
import { parseConsumablesToNumber, parseStringToNumber } from "../helpers";
import { ResponseTypeChampion, ResponseTypeStarships } from "../types";

const url = encodeURI("https://swapi.dev/api/");

export const getStarships = async (): Promise<ResponseTypeStarships[]> => {
  return axios
    .get(`${url}starships`)
    .then((res) => {
      const starships: Array<ResponseTypeStarships> = res.data.results.map(
        (starship: ResponseTypeStarships) => {
          return {
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            cost_in_credits: parseStringToNumber(starship.cost_in_credits),
            length: parseStringToNumber(starship.length),
            max_atmosphering_speed: parseStringToNumber(
              starship.max_atmosphering_speed
            ),
            crew: parseStringToNumber(starship.crew),
            passengers: parseStringToNumber(starship.passengers),
            cargo_capacity: parseStringToNumber(starship.cargo_capacity),
            consumables: parseConsumablesToNumber(starship.consumables),
            hyperdrive_rating: parseStringToNumber(starship.hyperdrive_rating),
            MGLT: parseStringToNumber(starship.MGLT),
          };
        }
      );

      return starships;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getChampions = async (): Promise<ResponseTypeChampion[]> => {
  return axios
    .get(`${url}people`)
    .then((res) => {
      const champions: Array<ResponseTypeChampion> = res.data.results.map(
        (champion: ResponseTypeChampion) => {
          return {
            name: champion.name,
            height: parseStringToNumber(champion.height),
            mass: parseStringToNumber(champion.mass),
            hair_color: champion.hair_color,
            skin_color: champion.skin_color,
            eye_color: champion.eye_color,
            birth_year: parseStringToNumber(champion.birth_year),
            gender: parseStringToNumber(champion.gender),
          };
        }
      );
      return champions;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};
