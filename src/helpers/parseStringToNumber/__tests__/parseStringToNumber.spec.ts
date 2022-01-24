import { parseStringToNumber } from "..";
test("should parse age in BBY to number", () => {
  expect(parseStringToNumber("101BBY")).toBe(101);
});

test("should parse range in km to number", () => {
  expect(parseStringToNumber("1000km")).toBe(1000);
});

test("should parse n-digits string-numbers splited with ',' to number", () => {
  expect(parseStringToNumber("100,000")).toBe(100000);
});

test("should parse range to the highest number in range", () => {
  expect(parseStringToNumber("20-350")).toBe(350);
});

test("should not parse 'unknown' string ", () => {
  expect(parseStringToNumber("unknown")).toBe("unknown");
});

test("should not parse 'n/a' string ", () => {
  expect(parseStringToNumber("n/a")).toBe("n/a");
});
