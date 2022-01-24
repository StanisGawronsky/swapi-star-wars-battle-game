import { StarshipType } from "../types";

export const starshipMockArray: StarshipType[] = [
  {
    name: "Executor",
    model: "Executor-class star dreadnought",
    manufacturer: "Kuat Drive Yards, Fondor Shipyards",
    cost_in_credits: 1143350000,
    length: 19000,
    max_atmosphering_speed: 0,
    crew: 279144,
    passengers: 38000,
    cargo_capacity: 250000000,
    consumables: 6,
    hyperdrive_rating: 2,
    MGLT: 40,
  },
  {
    name: "Sentinel-class landing craft",
    model: "Sentinel-class landing craft",
    manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
    cost_in_credits: 240000,
    length: 38,
    max_atmosphering_speed: 1000,
    crew: 5,
    passengers: 75,
    cargo_capacity: 180000,
    consumables: 30,
    hyperdrive_rating: 1,
    MGLT: 70,
  },
];
