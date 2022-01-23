require("@testing-library/jest-dom/extend-expect");
require("@testing-library/jest-dom");
require("jest-canvas-mock");

console.warn = jest.fn();
console.error = jest.fn();

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => () => "next/image",
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
