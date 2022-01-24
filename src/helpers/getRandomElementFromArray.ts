export const getRandomElementFromArray = (array: any[]) => {
  if (array?.length > 0) {
    const random = Math.floor(Math.random() * (array?.length - 1) + 1);
    return array[random];
  }
};
