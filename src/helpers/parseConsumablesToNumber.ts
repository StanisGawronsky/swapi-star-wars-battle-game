export const parseConsumablesToNumber = (consumable: string) => {
  const array = consumable.split(" ");
  const strictValue = parseInt(array[0]) as number;
  const multiplier = array[1];
  let period = 0;

  if (multiplier === "years" || multiplier === "year") {
    period = 360;
  } else if (multiplier === "months" || multiplier === "month") {
    period = 30;
  } else if (multiplier === "weeks" || multiplier === "week") {
    period = 7;
  } else if (multiplier === "days" || multiplier === "day") {
    period = 1;
  }
  return strictValue * period;
};
