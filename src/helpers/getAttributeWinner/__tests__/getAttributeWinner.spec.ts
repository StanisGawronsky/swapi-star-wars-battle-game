import { championMockArray } from "~/__mocks__/championMockArray";
import { starshipMockArray } from "~/__mocks__/starshipMockArray";
import getAttributeWinner from "../getAttributeWinner";

describe("Champions comparison", () => {
  test("check if comparison between Champions work", () => {
    expect(getAttributeWinner(championMockArray, "height")).toBe("player 2");
  });

  test("check if comparison between Champions work", () => {
    expect(getAttributeWinner(championMockArray, "mass")).toBe("player 1");
  });

  test("check if comparison between Champions work", () => {
    expect(getAttributeWinner(championMockArray, "birth_year")).toBe(
      "player 2"
    );
  });
});

describe("Starships comparison", () => {
  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "cost_in_credits")).toBe(
      "player 1"
    );
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "length")).toBe("player 1");
  });

  test("check if comparison between Starships work", () => {
    expect(
      getAttributeWinner(starshipMockArray, "max_atmosphering_speed")
    ).toBe("player 2");
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "crew")).toBe("player 1");
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "passengers")).toBe(
      "player 1"
    );
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "cargo_capacity")).toBe(
      "player 1"
    );
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "consumables")).toBe(
      "player 2"
    );
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "hyperdrive_rating")).toBe(
      "player 1"
    );
  });

  test("check if comparison between Starships work", () => {
    expect(getAttributeWinner(starshipMockArray, "MGLT")).toBe("player 2");
  });
});
