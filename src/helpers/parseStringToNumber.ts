export const parseStringToNumber = (value: string) => {
  if (value === "unknown" || value === "n/a") return null;

  let newstring = value;

  if (value?.includes("BBY")) {
    value.replace("BBY", "");
  }

  if (value?.includes("km")) {
    value.replace("km", "");
    newstring = value;
  }

  if (value?.includes(",")) {
    const string = value.split(",");
    newstring = string.join("");
  }

  if (value?.includes("-")) {
    const string = value.split("-");
    newstring = string[1];
  }

  return parseFloat(newstring);
};
