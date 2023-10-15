export const unique = (values: string[]): string[] => {
  return values.filter((value, index) => values.indexOf(value) === index);
};

export const permute = (value: string): string[] => {
  if (value.length <= 2)
    return value.length === 2 ? [value, value[1] + value[0]] : [value];
  return value.split("").reduce((acc, letter, i) => {
    const remaining = value.slice(0, i) + value.slice(i + 1);
    const allRemainingCase = permute(remaining);

    return acc.concat(allRemainingCase.map((item) => letter + item));
  }, [] as string[]);
};

export const permutations = (value: string): string[] => {
  return unique(permute(value));
};
