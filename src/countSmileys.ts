export const isSmile = (value: string): boolean => {
  return /^[:;][-~]?[)D]$/g.test(value);
};

export const countSmileys = (values: string[]): number => {
  let smileCounts = 0;

  values.map((value) => {
    if (isSmile(value)) {
      smileCounts++;
    }
  });

  return smileCounts;
};
