import parseConsumablesToNumber from "../parseConsumablesToNumber";

test("days multiplier x1", () => {
  expect(parseConsumablesToNumber("2 days")).toBe(2);
});

test("day multiplier x7", () => {
  expect(parseConsumablesToNumber("1 day")).toBe(1);
});

test("week multiplier x7", () => {
  expect(parseConsumablesToNumber("1 week")).toBe(7);
});

test("weeks multiplier x7", () => {
  expect(parseConsumablesToNumber("2 weeks")).toBe(14);
});

test("month multiplier x30", () => {
  expect(parseConsumablesToNumber("1 month")).toBe(30);
});

test("months multiplier x30", () => {
  expect(parseConsumablesToNumber("2 months")).toBe(60);
});

test("year multiplier x360", () => {
  expect(parseConsumablesToNumber("1 year")).toBe(360);
});

test("years multiplier x360", () => {
  expect(parseConsumablesToNumber("2 years")).toBe(720);
});
