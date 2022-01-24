import parseAttributesForView from "../parseAttributesForView";

test("", () => {
  expect(parseAttributesForView("cargo_capacity")).toBe("cargo capacity");
});
