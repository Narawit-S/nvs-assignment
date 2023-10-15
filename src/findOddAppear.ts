export const NOT_FOUND_WARNING = "Not found odd appear";
export const WRONG_INPUT_WARNING =
  "Odd appear more than one number, Please check your input";

export const findOddAppear = (values: number[]): number | string => {
  let answer: string | number = NOT_FOUND_WARNING;

  const result = new Map<number, number>();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const alreadyHas = result.has(value);

    if (alreadyHas) {
      const previousValue = result.get(value) as number;
      result.set(value, previousValue + 1);
    } else {
      result.set(value, 1);
    }
  }

  for (const [key, value] of result) {
    if (value % 2 === 1) {
      if (typeof answer === "number") {
        answer = WRONG_INPUT_WARNING;
        break;
      } else {
        answer = key;
      }
    }
  }

  return answer;
};
