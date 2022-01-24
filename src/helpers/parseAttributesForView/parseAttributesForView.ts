const parseAttributesForView = (string: string) => {
  return string.replaceAll("_", " ");
};
export default parseAttributesForView;
